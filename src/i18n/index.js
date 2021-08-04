import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import englishLocale from "./locales/en/en.json";
import spanishLocale from "./locales/es/es.json";

const DEFAULT_LOCALE = "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: englishLocale,
      es: spanishLocale
    },
    fallbackLng: DEFAULT_LOCALE,
    keySeparator: false
  });

export default i18n;
