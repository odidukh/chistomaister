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
            navbar: {
                services: {
                    name: 'Послуги',
                    dropdownElements: {
                        mattress: 'Хімчистка матраців',
                        upholstery: 'Хімчистка меблів',
                        car: 'Хімчистка авто',
                        couch: 'Хімчистка диванів',
                    },
                },
                about: 'Про нас',
                contacts: 'Контакти',
                blog: 'Блог',
                photos: 'Фото',
                prices: 'Ціни',
                reviews: 'Відгуки',
            },

            // main page
            services: {
                header: 'Бажаєте повернути своїм мʼягким меблям або салону авто оригінальну чистоту і свіжість?',
                description: `Ми пропонуємо послуги мʼягких меблів, авто, матраців, диванів та шкіри.
                    Використовуємо сучасні технології та засоби для чистки, щоб Ваші меблі і авто були чистими і свіжими.`,
            },

            services: {
                couch_cleaning: {
                    header: 'Хімчистка диванів',
                    description: `Хімчистка диванів від пилових кліщів, пилу, бактерій, грибків.
                        Якісно та з душею.
                        Телефонуйте нам aбо замовте дзвінок, щоб дізнатися подробиці.`,
                },

                mattress_cleaning: {
                    header: 'Хімчистка матраців',
                    description: `Хімчистка матраців від пилових кліщів, пилу, бактерій, грибків.
                        Якісно та з душею.
                        Телефонуйте нам aбо замовте дзвінок, щоб дізнатися подробиці.`,
                },

                upholstery_cleaning: {
                    header: 'Хімчистка меблів',
                    description: `Хімчистка меблів від пилу, бактерій, грибків.
                        Якісно та з душею.
                        Телефонуйте нам aбо замовте дзвінок, щоб дізнатися подробиці.`,
                },

                car_cleaning: {
                    header: 'Хімчистка авто',
                    description: `Детейлінг автомобіля.
                        Якісно та з душею.
                        Телефонуйте нам aбо замовте дзвінок, щоб дізнатися подробиці.`,

                    advantages: {
                        header: 'Переваги хімчистки авто',

                        advantages_list: {
                            1: {
                                title: 'Відмінний результат',
                                description: `В процесі хімчистки салону видаляються до 100% забруднень.
                                Чому не 100? Маленький відсоток відведений на ті плями, які в принципі неможливо видалити.
                                Також прочищаються сидіння, чиститься стеля та килимки.
                                Таким чином, в салоні буде чисто та свіжо.`,
                            },
                            2: {
                                title: 'Свіжість',
                                description: `Неприємний запах в салоні автомобіля явище досить часте,
                                оскільки при експлуатації салон вбирає в себе безліч запахів, таких як їжа, дим від цигарок та інше.
                                Хімчистка допомагає усунути неприємний запах в салоні, замінюючи його на свіжість.`,
                            },
                            3: {
                                title: 'Збереження',
                                description: `Регулярна хімчистка дозволяє зберегти первинний вигляд салону,
                                щоб він довше прослужив Вам. Тому хімчистка є вкладенням на перспективу.`,
                            },
                        },
                    },
                },
            },

            // about page
            about: {
                header: 'Хто ми?',
                description: `
                    Вітаємо! "Майстер Чистоти" (Chisto Maister) -- це сімейний бізнес, який зʼявився в 2021 році.
                    Ми розпочинали роботу з вивчення технологій хімчистки, вибору кращих зразків обладнання та найбезпечніших засобів для чистки.
                    Практику проводили на власних меблях та авто.
                    І лише після доведення навичок до ідеалу ми почали пропонувати свої послуги клієнтам.
                    Доказом нашої якісної і відповідальної роботи є десятки задоволених клієнтів, які повертаються до нас знову і радять нас друзям.
                    Тому ми віримо, що ми зможемо зробити Ваше життя простішим і приємнішим.
                `,

                technologies: 'Техніка та технології',
                equipment: 'Обладнання',
                equipment_description: `Ми використовуємо сучасне обладнання для чистки меблів, авто, матраців та диванів.`,
                chemicals: 'Хімічні засоби',
                chemicals_description: `Ми використовуємо найбезпечніші та найефективніші засоби для чистки меблів, авто, матраців та диванів.`,
            },

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
            where_we_work_description: `Ми працюємо по всьому Тальнівському, а також сусідніх районах. Якщо Ви не знаєте, чи ми працюємо у Вашому населеному пункті, зателефонуйте нам і ми Вам розкажемо.`,

            order_cleaning_header:
                'Замовте хімчистку у кращого Майстра Чистоти!',

            email_address: 'Ваша електронна пошта',
            enter_your_email: 'Введіть Вашу електронну пошту',
            phone_number: 'Ваш номер телефону',
            enter_your_phone_number: 'Введіть Ваш номер телефону',
            your_name: "Ваше ім'я",
            enter_your_name: "Введіть Ваше ім'я",
            your_message: 'Ваше повідомлення',

            send_message: 'Надіслати повідомлення',

            contact_info_header: 'Наші контакти',
            our_address: 'Наша адреса',
            bussiness_address:
                'місто Тальне, Звенигородський район, Черкаська область, Україна',
            our_phone_number: 'Наш номер телефону',
            our_email_address: 'Наша електронна пошта',

            question_button: 'Залишились питання?',
            order_cleaning_button: 'Замовити',
            close_button: 'Закрити',

            order_cleaning_modal_header: 'Замовити хімчистку',
            question_modal_header: 'Залишились питання?',

            social_networks_header: 'Ми у соціальних мережах',

            prices: {
                main_header: 'Ціни на наші послуги',
                table: {
                    column_1: 'Найменування',
                    column_2: 'Ціна',
                },
                furniture_cleaning: {
                    header: 'Хімчистка мʼяких меблів',
                    type: {
                        couch_for_two: 'Диван двохмісний',
                        couch_for_two_with_extended_part:
                            'Диван двохмісний з розкладною частиною',
                        angle_couch: 'Кутовий диван',
                        angle_couch_with_extended_part:
                            'Кутовий диван з розкладною частиною',
                        armchair: 'Крісло',
                        armchair_extended: 'Крісло-розкладне',
                        chair: 'Стілець',
                        chair_armchair: 'Стілець-крісло',
                    },
                },
                mattress_cleaning: {
                    header: 'Хімчистка матраців',
                    type: {
                        child_1_side: 'Дитячий (1 сторона)',
                        child_2_sides: 'Дитячий (2 сторони)',
                        one_and_a_half_1_side: 'Полуторний (1 сторона)',
                        one_and_a_half_2_sides: 'Полуторний (2 сторони)',
                        two_1_side: 'Двомісний (1 сторона)',
                        two_2_sides: 'Двомісний (2 сторони)',
                    },
                },
                car_cleaning: {
                    header: 'Хімчистка автомобіля',
                    type: {
                        cealing: 'Стеля',
                        seats: 'Сидіння',
                        floor: 'Підлога',
                        trunk: 'Багажник',
                        side_cards: 'Бокові карти',
                        whole_car: 'Весь автомобіль',
                    },
                },
            },
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
