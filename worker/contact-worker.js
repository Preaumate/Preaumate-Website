/**
 * =============================================================================
 * Preaumate Contact Form — Cloudflare Worker
 * worker/contact-worker.js
 * =============================================================================
 *
 * What this Worker does
 * ──────────────────────
 * 1. Receives the form submission from the browser (POST request)
 * 2. Verifies the Cloudflare Turnstile token — proves the visitor is human
 * 3. Sanitises all input to prevent injection attacks
 * 4. Calls the EmailJS REST API to send the email
 * 5. Returns a success or error response to the browser
 *
 * Because this code runs on Cloudflare's servers, the EmailJS credentials
 * are NEVER visible in the browser. Visitors cannot read or abuse them.
 *
 * Environment variables — set these as SECRETS in the Cloudflare dashboard
 * ────────────────────────────────────────────────────────────────────────────
 *  TURNSTILE_SECRET_KEY   From Cloudflare > Turnstile > your widget > Secret key
 *  EMAILJS_SERVICE_ID     From EmailJS dashboard  (e.g. service_f7sb4ff)
 *  EMAILJS_TEMPLATE_ID    From EmailJS dashboard  (e.g. template_380uvq9)
 *  EMAILJS_PUBLIC_KEY     From EmailJS dashboard  (e.g. wIXxCpnLMdvOcoQPx)
 *
 * Environment variables — set these as plain VARIABLES (not secrets)
 * ────────────────────────────────────────────────────────────────────────────
 *  ALLOWED_ORIGIN         https://preaumate.nl
 *
 * See SECURITY_SETUP.md for step-by-step deployment instructions.
 * =============================================================================
 */

// Origins allowed to call this Worker.
// Requests from any other domain are rejected.
const ALLOWED_ORIGINS = [
  'https://preaumate.nl',
  'https://www.preaumate.nl',
  'http://localhost:5173',   // Vite dev server
  'http://localhost:4173',   // Vite preview
  'http://localhost:8787',   // wrangler dev (Worker calling itself in tests)
];

// Maximum length for each text field (prevents very large payloads)
const MAX_LENGTHS = {
  companyName:     200,
  email:           200,
  phone:           50,
  serviceInterest: 200,
  message:         5000,
};

// =============================================================================
// MAIN HANDLER
// =============================================================================

export default {
  async fetch(request, env) {

    const origin = request.headers.get('Origin') || '';

    // ── CORS preflight ───────────────────────────────────────────────────────
    // Browsers send an OPTIONS request before the real POST to check
    // whether the server will accept cross-origin requests.
    if (request.method === 'OPTIONS') {
      return makeCorsResponse(null, 204, origin);
    }

    // ── Only accept POST ─────────────────────────────────────────────────────
    if (request.method !== 'POST') {
      return makeCorsResponse({ error: 'Method not allowed.' }, 405, origin);
    }

    // ── Validate origin ──────────────────────────────────────────────────────
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return makeCorsResponse({ error: 'Forbidden.' }, 403, origin);
    }

    // ── Parse and validate the request body ──────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return makeCorsResponse({ error: 'Invalid JSON body.' }, 400, origin);
    }

    const {
      turnstileToken,
      companyName,
      email,
      phone,
      serviceInterest,
      message,
      timestamp,
    } = body;

    // Check that the required fields are present
    if (!turnstileToken || !companyName || !email || !serviceInterest || !message) {
      return makeCorsResponse({ error: 'Missing required fields.' }, 400, origin);
    }

    // ── Step 1: Verify Turnstile token ───────────────────────────────────────
    // The token was generated in the visitor's browser by the Turnstile widget.
    // We verify it here with Cloudflare's server — this is the key security step.
    // If the token is invalid or forged, we reject the request immediately.
    const visitorIP   = request.headers.get('CF-Connecting-IP') || '';
    const tokenIsValid = await verifyTurnstile(turnstileToken, visitorIP, env.TURNSTILE_SECRET_KEY);

    if (!tokenIsValid) {
      return makeCorsResponse(
        { error: 'Security verification failed. Please reload the page and try again.' },
        403,
        origin,
      );
    }

    // ── Step 2: Sanitise inputs ───────────────────────────────────────────────
    // Remove HTML tags and limit field lengths to prevent injection attacks.
    const clean = {
      companyName:     sanitise(companyName,     MAX_LENGTHS.companyName),
      email:           sanitise(email,           MAX_LENGTHS.email),
      phone:           sanitise(phone || '',     MAX_LENGTHS.phone),
      serviceInterest: sanitise(serviceInterest, MAX_LENGTHS.serviceInterest),
      message:         sanitise(message,         MAX_LENGTHS.message),
      timestamp:       timestamp || new Date().toISOString(),
    };

    // Basic email format check (belt and braces — the browser also validates)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      return makeCorsResponse({ error: 'Invalid email address.' }, 400, origin);
    }

    // ── Step 3: Send the email via EmailJS REST API ───────────────────────────
    // Credentials come from env (secret variables) — never from the browser.
    const emailResult = await sendEmail(clean, env);

    if (!emailResult.ok) {
      const errText = await emailResult.text().catch(() => 'unknown');
      console.error('EmailJS error:', emailResult.status, errText);
      return makeCorsResponse(
        { error: 'Could not send email. Please try again or contact us directly.' },
        502,
        origin,
      );
    }

    // ── All done ─────────────────────────────────────────────────────────────
    return makeCorsResponse({ success: true }, 200, origin);
  },
};

// =============================================================================
// TURNSTILE VERIFICATION
// Calls Cloudflare's server to validate the token the browser sent.
// Returns true = valid human, false = bot or invalid token.
// =============================================================================

async function verifyTurnstile(token, ip, secretKey) {
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not set in Worker environment.');
    return false;
  }

  // Cloudflare's verification endpoint expects a multipart form, not JSON
  const form = new FormData();
  form.append('secret',   secretKey);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);

  try {
    const res  = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body:   form,
    });
    const data = await res.json();

    if (!data.success) {
      console.warn('Turnstile failed. Error codes:', data['error-codes']);
    }

    return data.success === true;

  } catch (err) {
    console.error('Turnstile verification fetch failed:', err);
    return false;
  }
}

// =============================================================================
// EMAIL SENDING
// Calls EmailJS via their REST API so credentials stay on the server.
// =============================================================================

async function sendEmail(data, env) {
  const { companyName, email, phone, serviceInterest, message, timestamp } = data;

  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id:  env.EMAILJS_SERVICE_ID,
      template_id: env.EMAILJS_TEMPLATE_ID,
      user_id:     env.EMAILJS_PUBLIC_KEY,
      template_params: {
        company_name:     companyName,
        email:            email,
        phone:            phone || 'Not provided',
        service_interest: serviceInterest,
        message:          message,
        timestamp:        timestamp,
      },
    }),
  });
}

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Build a JSON Response with the correct CORS headers.
 * CORS headers tell the browser it is allowed to read the response
 * even though the request went to a different domain (the Worker URL).
 */
function makeCorsResponse(data, status, requestOrigin) {
  // Only echo back origins we actually allow
  const allowOrigin = ALLOWED_ORIGINS.includes(requestOrigin)
    ? requestOrigin
    : ALLOWED_ORIGINS[0];

  const headers = {
    'Content-Type':                 'application/json',
    'Access-Control-Allow-Origin':  allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-Content-Type-Options':       'nosniff',
  };

  return new Response(
    data ? JSON.stringify(data) : null,
    { status, headers },
  );
}

/**
 * Remove HTML tags and trim the value to a maximum length.
 * This prevents script injection and oversized payloads.
 */
function sanitise(value, maxLength = 1000) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/<[^>]*>/g, '')           // strip HTML tags
    .replace(/[<>'"]/g, (c) => ({      // encode remaining special chars
      '<': '&lt;', '>': '&gt;',
      "'": '&#39;', '"': '&quot;',
    })[c])
    .trim()
    .slice(0, maxLength);
}
