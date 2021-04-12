import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LenguageDetector from 'i18next-browser-languagedetector'

// Lenguages
import es from './es.json';

const resources = {
  es: { translation: es },
}

export const defaultLenguagge = 'es';

// Config i18n
i18n
  .use(LenguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  // Use to display options
export const lang = [
  { value: 'es', name: 'Español' }
];

export default i18n;