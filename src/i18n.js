import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            services: 'Services',
            about: 'About',
            contacts: 'Contacts',
            blog: 'Blog',
            photos: 'Photos',
            prices: 'Prices',
            reviews: 'Reviews',

            'carpet-cleaning': 'Carpet cleaning',
            'mattress-cleaning': 'Mattress cleaning',
            'upholstery-cleaning': 'Upholstery cleaning',
            'car-cleaning': 'Car cleaning',
            'couch-cleaning': 'Couch cleaning',
            'leather-cleaning': 'Leather cleaning',
        },
    },
    ua: {
        translation: {
            services: 'Послуги',
            about: 'Про нас',
            contacts: 'Контакти',
            blog: 'Блог',
            photos: 'Фото',
            prices: 'Ціни',
            reviews: 'Відгуки',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
