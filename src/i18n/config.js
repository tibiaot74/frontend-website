import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      "pt-br": {
        translations: require("./locales/pt-br/translations.json"),
      },
      en: {
        translations: require("./locales/en/translations.json"),
      },
      esp: {
        translations: require("./locales/esp/translations.json"),
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["en", "esp", "pt-br"];

export default i18n;
