// ============================================================
// IMPORTS — bringing in tools and components we need to use
// Think of these like "loading your toolbox" before starting work
// ============================================================

import React, { useEffect } from 'react';
// React is the core library that makes JSX work
// useEffect is a special React "hook" — it lets us run code 
// at specific moments, like when the page first loads

import { Helmet } from 'react-helmet';
// Helmet lets us change what's in the browser <head> tag
// That's where the page title and description live
// (the text you see in the browser tab and in Google search results)

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
// These are all the visual building blocks of the page
// Each one is a separate file (component) that we built earlier
// We import them here so we can place them on the page like lego bricks

import CookieBanner, { getCookieConsent } from '@/components/ConsentBanner';
// CookieBanner is the popup we just created in Step 1
// getCookieConsent is a helper function from that same file
// that checks if the user has already made a cookie choice
// Notice we import TWO things from one file — that's why getCookieConsent
// is wrapped in curly braces { } while CookieBanner is not
// No curly braces = the "main" export of the file (default export)
// Curly braces = a "named" export, a secondary thing the file also exports

import { Toaster } from '@/components/ui/toaster';
// Toaster is the invisible container that displays toast notifications
// (the little popup messages when a form is submitted)
// Without this on the page, toast() calls will trigger but nothing shows


// ============================================================
// GOOGLE ANALYTICS SETUP
// This section configures analytics but does NOT load it yet
// Loading only happens after the user gives cookie consent
// ============================================================

// Your unique Google Analytics ID — replace with your real one
// You get this from your Google Analytics dashboard
// It always starts with G- followed by letters and numbers
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const loadGoogleAnalytics = () => {
  // This is a function that loads Google Analytics onto the page
  // We define it here but only CALL it when the user accepts cookies
  // This is the GDPR-compliant approach — never track before consent

  if (document.getElementById('ga-script')) return;
  // Safety check — if Analytics is already loaded, stop here
  // Without this check, it could load twice if something re-runs this function
  // document.getElementById looks for an HTML element with id="ga-script"
  // The 'return' immediately exits the function if it finds one

  const script = document.createElement('script');
  // Creates a new <script> HTML element in memory
  // A <script> tag is how you load external JavaScript files into a webpage

  script.id = 'ga-script';
  // Gives it the id="ga-script" so our safety check above can find it later

  script.async = true;
  // async means "load this in the background, don't freeze the page while loading"
  // Without async, the browser would stop rendering the page until this file downloads

  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  // This is the URL of Google's Analytics script file
  // The ${GA_MEASUREMENT_ID} part inserts your ID into the URL
  // The backticks ` ` instead of quotes allow this kind of variable insertion
  // This is called a "template literal" in JavaScript

  document.head.appendChild(script);
  // Actually adds the <script> tag to the page's <head> section
  // This is what triggers the browser to download and run Google's code

  window.dataLayer = window.dataLayer || [];
  // window is the global browser object — anything on window is available everywhere
  // dataLayer is Google's "inbox" — you push data into it and Google reads it
  // The || [] means "use existing dataLayer if it exists, otherwise create empty array"

  function gtag() { window.dataLayer.push(arguments); }
  // gtag is the function Google provides to send data to Analytics
  // Every time you call gtag(...), it pushes data into the dataLayer inbox
  // arguments is a special JavaScript word meaning "whatever was passed into this function"

  window.gtag = gtag;
  // Makes gtag available globally so any part of the app can call it
  // Without this, gtag would only exist inside this function and nothing else could use it

  gtag('js', new Date());
  // Tells Google Analytics "the script just loaded, here's the current time"
  // new Date() creates a timestamp of right now

  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  // Activates Analytics with your ID
  // anonymize_ip: true is IMPORTANT for GDPR — it tells Google to
  // cut off the last part of each visitor's IP address before storing it
  // so you can never identify exactly who someone is from their IP
};


// ============================================================
// THE HOMEPAGE COMPONENT
// This is the actual page — it assembles all the pieces together
// In React, a "component" is just a function that returns JSX (HTML-like code)
// ============================================================

const HomePage = () => {
  // This declares HomePage as an arrow function component
  // Arrow functions use => instead of the word "function"
  // const means it cannot be reassigned to something else later

  useEffect(() => {
    // useEffect runs code AFTER the page has finished loading
    // Think of it as saying "once everything is ready, do this..."
    // Without useEffect, this code would run too early, before the page exists

    if (getCookieConsent() === 'accepted') {
      loadGoogleAnalytics();
    }
    // getCookieConsent() checks localStorage for a saved cookie choice
    // If the user already accepted cookies in a previous visit, 
    // load Analytics immediately without showing the banner again
    // If they rejected or haven't chosen yet, do nothing

  }, []);
  // The [] at the end is the "dependency array"
  // An empty [] means "only run this once, when the page first loads"
  // If you put a variable inside like [userId], it would re-run whenever that variable changes
  // This is one of the most important things to understand about useEffect


  const handleConsentChange = (consent) => {
    // This is a function that the CookieBanner component will call
    // when the user clicks Accept or Reject on the banner
    // The 'consent' parameter will be either the string 'accepted' or 'rejected'

    if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
    // If they clicked Accept, load Analytics now
    // If they clicked Reject, we do nothing — no else needed
    // Analytics simply never loads
  };


  // ==========================================================
  // THE RETURN — this is what actually appears on screen
  // Everything inside return() is JSX — it looks like HTML
  // but it's actually JavaScript that React converts to real HTML
  // ==========================================================

  return (
    // Parentheses () allow us to write the JSX across multiple lines
    // Without them, JavaScript would only see the first line

    <>
      {/* The <> and </> are called a "Fragment"
          React requires all JSX to have one single parent element
          But we don't want an extra unnecessary <div> wrapping everything
          A Fragment acts as an invisible wrapper — no extra HTML is created */}

      <Helmet>
        {/* Helmet controls what goes in the browser's <head> tag
            This is invisible to users but important for SEO and browser tabs */}
        <title>Preaumate - Industrial Automation Reimagined | AI-Powered Smart Factory Solutions</title>
        <meta
          name="description"
          content="Transform your manufacturing with Preaumate's AI-powered automation, predictive analytics, IoT integration, and smart factory solutions."
        />
        {/* The description meta tag is what Google shows under your link in search results
            Keep it under 160 characters for best results */}
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* This outer div is the page container
            min-h-screen means "be at least as tall as the full browser window"
            bg-gray-50 sets a very light grey background for the whole page */}

        <Header />
        {/* The fixed navigation bar at the top
            It's "fixed" meaning it stays visible as you scroll down */}

        <HeroSection />
        {/* The big full-screen landing section with the logo and headline
            This is what visitors see first when they arrive */}

        <AboutSection />
        {/* The section with the 4 feature cards and the stats row */}

        <ServicesSection />
        {/* The section with the 4 gradient service cards in a 2x2 grid */}

        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          {/* This is a regular HTML <section> tag, not a custom component
              id="contact" is how the smooth scroll navigation finds this section
              when someone clicks "Contact" in the Header
              py-20 adds padding top and bottom (py = padding on Y axis = top + bottom)
              bg-gradient-to-br creates a diagonal gradient background
              from-gray-50 to-gray-100 sets the start and end colours of that gradient */}

          <div className="container mx-auto px-6">
            {/* container limits the maximum width so content doesn't stretch too wide on large screens
                mx-auto centers it horizontally (margin: auto on left and right)
                px-6 adds horizontal padding so content doesn't touch the screen edges
                px = padding on X axis = left + right */}

            <ContactForm />
            {/* The contact form with validation and EmailJS sending */}
          </div>
        </section>

        <Footer />
        {/* The dark footer at the bottom with links and social icons */}

      </div>

      <CookieBanner onConsentChange={handleConsentChange} />
      {/* The cookie consent banner that slides up from the bottom
          onConsentChange={handleConsentChange} passes our function INTO the banner
          This is how React components talk to each other — 
          the parent (HomePage) passes a function down to the child (CookieBanner)
          and the child calls it when something happens (user clicks Accept/Reject)
          This pattern is called "props" and is fundamental to how React works */}

      <Toaster />
      {/* The invisible toast notification container
          Placed OUTSIDE the main div so it can float above everything else
          When ContactForm calls toast(), this component renders the popup */}

    </>
  );
};

export default HomePage;
// This line makes HomePage available for other files to import
// Without this, the App.jsx file couldn't import and use this page
// "default" means this is the main thing this file exports
// That's why in App.jsx we can write: import HomePage from '@/pages/HomePage'
// without needing curly braces
