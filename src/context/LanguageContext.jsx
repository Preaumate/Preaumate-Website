import React, { createContext, useState, useContext } from 'react';
import { translations } from "@/lib/i18n";

// createContext creates a React Context object.
// A context lets us share data across many components
// without passing props through every level manually.
const LanguageContext = createContext();

// This component will wrap part (or all) of the app
// and provide language-related values to its children.
export const LanguageProvider = ({ children }) => {
  // useState stores the current language in React state.
  //
  // We pass a function (() => { ... }) instead of a direct value.
  // This is called a "lazy initializer":
  // React runs it only once, on the first render.
  //
  // It tries to read the saved language from localStorage.
  // If nothing is saved yet, it falls back to 'en'.
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('preaumate_language') || 'en';
  });

  // This function changes the language in two places:
  // 1. React state -> so the UI updates immediately
  // 2. localStorage -> so the choice is remembered after refresh
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preaumate_language', lang);
  };

  // translations is assumed to be an object like:
  // {
  //   en: {...},
  //   fr: {...},
  //   es: {...}
  // }
  //
  // We select the translations for the current language.
  // If that language does not exist, we fall back to English.
  const t = translations[language] || translations['en'];

  // LanguageContext.Provider makes the value available
  // to every component inside it.
  //
  // value={{ language, changeLanguage, t }}
  // means that child components can access:
  // - language        -> current selected language
  // - changeLanguage  -> function to switch language
  // - t               -> translations for the current language
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// This is a custom hook.
// It is a helper so components can do:
// const { language, changeLanguage, t } = useLanguage();
//
// instead of writing useContext(LanguageContext) every time.
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  // Safety check:
  // if someone uses useLanguage() outside of LanguageProvider,
  // context will be undefined (or invalid),
  // so we throw a clear error explaining the mistake.
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  // Return the context value so components can use it.
  return context;
};
