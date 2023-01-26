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

            // Services

            // Couch cleaning page
            couch_cleaning_header: 'Dry cleaning at your home',
            couch_cleaning_description:
                'Supporting cleaning of delicate and expensive couches, and also dry cleaning really dirty furniture from spots, stains, dust, and unpleaseant smells.',
            couch_cleaning_button: 'Order Now',
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

            'carpet-cleaning': 'Хімчистка килимів',
            'mattress-cleaning': 'Хімчистка матраців',
            'upholstery-cleaning': 'Хімчистка меблів',
            'car-cleaning': 'Хімчистка авто',
            'couch-cleaning': 'Хімчистка диванів',
            'leather-cleaning': 'Хімчистка шкіри',

            // Services

            // Couch cleaning page
            couch_cleaning_header: 'Хімчистка дивану у Вас вдома',
            couch_cleaning_description: `Підтримуюча хімчистка делікатних і дорогих диванів, 
                а також хімчистку дійсно грязних меблів від плям,
                пилу і неприємних запахів.`,
            couch_cleaning_button: 'Замовити',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'ua', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
