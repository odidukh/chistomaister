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
            couch_cleaning: 'Dry cleaning at your home',
            couch_cleaning_description:
                'Supporting cleaning of delicate and expensive couches, and also dry cleaning really dirty furniture from spots, stains, dust, and unpleaseant smells.',
            couch_cleaning_button: 'Order Now',

            couch_cleaning_process_header: 'How we clean your couch',
            couch_cleaning_process_step_1: 'Огляд, уточнення історії дивана',
            couch_cleaning_process_step_1_description: `Ми запитуємо скільки років дивану, чи знаєте від чого плями, чи намагалися самостійно їх видалити, і на що звернути особливу увагу.`,

            couch_cleaning_process_step_2: 'Вибивання пилу, пилових кліщів',
            couch_cleaning_process_step_2_description: `Ми вибиваємо пил, пилові кліщі, плями, які вже відомі нам, а також вибиваємо пил з швів, щоб він не попав в машину.`,

            couch_cleaning_process_step_3: 'Глибинна промивка оббивки дивана',
            couch_cleaning_process_step_3_description: `Ми використовуємо технологію аквачистки, котра передбачає промивання оббивки, тканини дивана і найближчих шарів під ними. Дана технологія дозволяє домогтися неймовірного результату, завдяки відмінно підібраним засобам, якісній техніці та досвіду майстрів.`,

            couch_cleaning_process_step_4:
                'Нейтралізація запаху (у разі потреби)',
            couch_cleaning_process_step_4_description: `Щоб прибрати неприємний запах ми використовуємо сильну та безпечну американську косметику. Завдяки їй всього за кілька годин неприємний запах нейтралізується і залишається легкий аромат цитрусів.

            * Іноді, в складних випадках, місце з неприємним запахом потрібно проходити кілька разів. Ми готові приїжджати стільки, скільки необхідно для досягнення ідеального результату.`,

            couch_cleaning_process_step_5: 'Обробка складних плям',
            couch_cleaning_process_step_5_description: `Ми підібрали близько 10 засобів для обробки найрізноманітніших плям. Ми навчалися у професіоналів, читали закордонні форуми, тільки для того, щоб підібрати найкращі засоби.`,

            couch_cleaning_process_step_6:
                'Ополіскування, розчісування тканини (у разі потреби)',
            couch_cleaning_process_step_6_description: `Деякі делікатні та натуральні тканини потрібно обов'язково промивати ополіскувачем, щоб вони були ніжними та приємними на дотик.`,
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
            couch_cleaning_process_header: 'Як ми чистимо Ваш диван',

            couch_cleaning_process_step_1: 'Огляд, уточнення історії дивана',
            couch_cleaning_process_step_1_description: `Ми запитуємо скільки років дивану, чи знаєте від чого плями, чи намагалися самостійно їх видалити, і на що звернути особливу увагу.`,

            couch_cleaning_process_step_2: 'Вибивання пилу, пилових кліщів',
            couch_cleaning_process_step_2_description: `Ми вибиваємо пил, пилові кліщі, плями, які вже відомі нам, а також вибиваємо пил з швів, щоб він не попав в машину.`,

            couch_cleaning_process_step_3: 'Глибинна промивка оббивки дивана',
            couch_cleaning_process_step_3_description: `Ми використовуємо технологію аквачистки, котра передбачає промивання оббивки, тканини дивана і найближчих шарів під ними. Дана технологія дозволяє домогтися неймовірного результату, завдяки відмінно підібраним засобам, якісній техніці та досвіду майстрів.`,

            couch_cleaning_process_step_4:
                'Нейтралізація запаху (у разі потреби)',
            couch_cleaning_process_step_4_description: `Щоб прибрати неприємний запах ми використовуємо сильну та безпечну американську косметику. Завдяки їй всього за кілька годин неприємний запах нейтралізується і залишається легкий аромат цитрусів.

            * Іноді, в складних випадках, місце з неприємним запахом потрібно проходити кілька разів. Ми готові приїжджати стільки, скільки необхідно для досягнення ідеального результату.`,

            couch_cleaning_process_step_5: 'Обробка складних плям',
            couch_cleaning_process_step_5_description: `Ми підібрали близько 10 засобів для обробки найрізноманітніших плям. Ми навчалися у професіоналів, читали закордонні форуми, тільки для того, щоб підібрати найкращі засоби.`,

            couch_cleaning_process_step_6:
                'Ополіскування, розчісування тканини (у разі потреби)',
            couch_cleaning_process_step_6_description: `Деякі делікатні та натуральні тканини потрібно обов'язково промивати ополіскувачем, щоб вони були ніжними та приємними на дотик.`,
            
            // Contact page
            where_we_work_header: 'Де ми працюємо',
            where_we_work_description: `Ми працюємо по всьому Тальнівському району, а також сусідніх районах. Якщо Ви не знаєте, чи ми працюємо у Вашому населеному пункті, зателефонуйте нам і ми Вам розкажемо.`,

            order_cleaning_header: 'Замовте хімчистку у кращого Майстра Чистоти!',
            
            email_address: 'Ваша електронна пошта',
            enter_your_email: 'Введіть Вашу електронну пошту',
            phone_number: 'Ваш номер телефону',
            enter_your_phone_number: 'Введіть Ваш номер телефону',
            your_name: 'Ваше ім\'я',
            enter_your_name: 'Введіть Ваше ім\'я',
            your_message: 'Ваше повідомлення',

            send_message: 'Надіслати повідомлення',

            contact_info_header: 'Наші контакти',
            our_address: 'Наша адреса',
            bussiness_address: 'місто Тальне, Звенигородський район, Черкаська область, Україна',
            our_phone_number: 'Наш номер телефону',
            our_email_address: 'Наша електронна пошта',

            question_button: 'Залишились питання?',
            order_cleaning_button: 'Замовити',
            close_button: 'Закрити',

            order_cleaning_modal_header: 'Замовити хімчистку',
            question_modal_header: 'Залишились питання?',

            social_networks_header: 'Ми у соціальних мережах',
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
