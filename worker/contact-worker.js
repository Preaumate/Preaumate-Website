/**
 * =============================================================================
 * Preaumate Contact Form — Cloudflare Worker
 * worker/contact-worker.js
 * =============================================================================
 *
 * UPDATED: now accepts an optional "projectContext" field — a text summary
 * of the pre-contact qualifier questionnaire answers. If the visitor skipped
 * the questionnaire, this field is empty and is simply omitted from the email.
 *
 * Environment variables — SECRETS in the Cloudflare dashboard
 * ────────────────────────────────────────────────────────────────────────────
 *  TURNSTILE_SECRET_KEY
 *  EMAILJS_SERVICE_ID
 *  EMAILJS_TEMPLATE_ID
 *  EMAILJS_PUBLIC_KEY
 *
 * Environment variables — plain VARIABLES
 * ────────────────────────────────────────────────────────────────────────────
 *  ALLOWED_ORIGIN   https://preaumate.nl
 *
 * EMAILJS TEMPLATE — required variable names
 * ────────────────────────────────────────────────────────────────────────────
 *  IMPORTANT: EmailJS templates only support plain {{variable}} substitution.
 *  They do NOT support {{#variable}}...{{/variable}} conditional blocks
 *  (that is Handlebars syntax, not EmailJS syntax).
 *
 *  Use exactly these variable names in your template — the Worker sends
 *  values for all of them on every submission:
 *
 *    {{from_name}}         → company name (also used by Auto-Reply tab)
 *    {{reply_to}}          → visitor's email (also used by Auto-Reply tab)
 *    {{company_name}}      → same as from_name, descriptive alias
 *    {{email}}             → same as reply_to, descriptive alias
 *    {{phone}}             → visitor's phone, or "Not provided"
 *    {{service_interest}}  → selected service
 *    {{message}}           → the visitor's message
 *    {{project_context}}   → questionnaire summary, OR a fallback sentence
 *                            if the visitor skipped the questionnaire
 *    {{timestamp}}         → submission date/time
 *
 *  Example Content tab body:
 *
 *    You have received a new message from Preaumate contactform!
 *
 *    From: {{from_name}}
 *    Email: {{reply_to}}
 *    Phone: {{phone}}
 *    Service: {{service_interest}}
 *
 *    Message:
 *    {{message}}
 *
 *    ---
 *    Pre-contact questionnaire:
 *    {{project_context}}
 *
 *  project_context is ALWAYS non-empty (the Worker provides a fallback
 *  sentence when the questionnaire was skipped), so no conditional
 *  wrapper is needed — just use {{project_context}} directly.
 * =============================================================================
 */

const ALLOWED_ORIGINS = [
  'https://preaumate.nl',
  'https://www.preaumate.nl',
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:8787',
];

const MAX_LENGTHS = {
  companyName:     200,
  email:           200,
  phone:           50,
  serviceInterest: 200,
  message:         5000,
  // Questionnaire summary can be longer — up to 10 questions including
  // two open-text answers. 4000 chars comfortably covers this.
  projectContext:  4000,
};

export default {
  async fetch(request, env) {

    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return makeCorsResponse(null, 204, origin);
    }

    if (request.method !== 'POST') {
      return makeCorsResponse({ error: 'Method not allowed.' }, 405, origin);
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return makeCorsResponse({ error: 'Forbidden.' }, 403, origin);
    }

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
      projectContext,   // ← NEW — optional, may be empty string or undefined
      timestamp,
    } = body;

    if (!turnstileToken || !companyName || !email || !serviceInterest || !message) {
      return makeCorsResponse({ error: 'Missing required fields.' }, 400, origin);
    }

    const visitorIP   = request.headers.get('CF-Connecting-IP') || '';
    const tokenIsValid = await verifyTurnstile(turnstileToken, visitorIP, env.TURNSTILE_SECRET_KEY);

    if (!tokenIsValid) {
      return makeCorsResponse(
        { error: 'Security verification failed. Please reload the page and try again.' },
        403,
        origin,
      );
    }

    const clean = {
      companyName:     sanitise(companyName,     MAX_LENGTHS.companyName),
      email:           sanitise(email,           MAX_LENGTHS.email),
      phone:           sanitise(phone || '',     MAX_LENGTHS.phone),
      serviceInterest: sanitise(serviceInterest, MAX_LENGTHS.serviceInterest),
      message:         sanitise(message,         MAX_LENGTHS.message),
      // ── NEW: sanitise the questionnaire summary too ───────────────────────
      // Note: sanitise() strips HTML tags but the multi-line formatting
      // (newlines, dashes) from formatQualifierSummary() is preserved —
      // only < > ' " get encoded, which doesn't affect that text.
      projectContext:  sanitise(projectContext || '', MAX_LENGTHS.projectContext),
      timestamp:       timestamp || new Date().toISOString(),
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      return makeCorsResponse({ error: 'Invalid email address.' }, 400, origin);
    }

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

    return makeCorsResponse({ success: true }, 200, origin);
  },
};

async function verifyTurnstile(token, ip, secretKey) {
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not set in Worker environment.');
    return false;
  }

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

async function sendEmail(data, env) {
  const { companyName, email, phone, serviceInterest, message, projectContext, timestamp } = data;

  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id:  env.EMAILJS_SERVICE_ID,
      template_id: env.EMAILJS_TEMPLATE_ID,
      user_id:     env.EMAILJS_PUBLIC_KEY,
      template_params: {
        // ── EmailJS standard field names ──────────────────────────────────
        // EmailJS's default template variables are {{from_name}} and
        // {{reply_to}} — used by the Content tab AND the Auto-Reply tab
        // (reply_to determines where auto-replies get sent).
        from_name:        companyName,
        reply_to:         email,

        // ── Same data under descriptive names too ─────────────────────────
        // Kept so either naming convention works in your template.
        company_name:     companyName,
        email:            email,
        phone:            phone || 'Not provided',
        service_interest: serviceInterest,
        message:          message,

        // ── Questionnaire summary ──────────────────────────────────────────
        // EmailJS does NOT support {{#var}}...{{/var}} conditional blocks —
        // that is Handlebars syntax and is not processed by EmailJS templates.
        // Instead we always provide a value: either the real summary, or a
        // short fallback sentence. Use plain {{project_context}} in the
        // template — no {{#...}} / {{/...}} wrapper.
        project_context:  projectContext && projectContext.trim()
          ? projectContext
          : 'No questionnaire was completed — visitor went directly to the contact form.',

        timestamp:        timestamp,
      },
    }),
  });
}

function makeCorsResponse(data, status, requestOrigin) {
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

function sanitise(value, maxLength = 1000) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/<[^>]*>/g, '')
    .replace(/[<>'"]/g, (c) => ({
      '<': '&lt;', '>': '&gt;',
      "'": '&#39;', '"': '&quot;',
    })[c])
    .trim()
    .slice(0, maxLength);
}