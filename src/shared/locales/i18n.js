import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { frTranslation } from "./fr";
import { enTranslation } from "./en";

i18next.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            fr: frTranslation,
            en: enTranslation,
        },
        ns:['common'],
        defaultNS: 'common',
    })

export default i18next