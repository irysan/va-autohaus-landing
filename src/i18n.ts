import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector)      // auto-detects browser language
  .use(initReactI18next)     // passes i18n instance to react-i18next
  .init({
    resources: { 
      en: { translation: en }, 
      es: { translation: es } 
    },
    fallbackLng: 'en',
    interpolation: { 
      escapeValue: false 
    }
  });

export default i18n;
