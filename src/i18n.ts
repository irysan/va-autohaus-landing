import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // auto-detects browser language
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly', // Load only language code (en) not region (en-GB)
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      // Convert any English variant to 'en'
      convertDetectedLanguage: (lng: string) => {
        if (lng.startsWith('en')) {
          return 'en';
        }
        if (lng.startsWith('es')) {
          return 'es';
        }
        return lng;
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
