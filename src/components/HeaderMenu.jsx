import React from 'react';
import HeaderDropdown from './HeaderDropdown';

const HEADER_MENU_ITEMS = [
    {
        id: 'services',
        name: 'Послуги',
        link: '/services',
        options: [
            { id: 'cleaning', name: 'Миття', link: '/services/cleaning' },
            { id: 'ironing', name: 'Глаження', link: '/services/ironing' },
            { id: 'laundry', name: 'Пральня', link: '/services/laundry' },
            {
                id: 'dry-cleaning',
                name: 'Хімчистка',
                link: '/services/dry-cleaning',
            },
            {
                id: 'carpet-cleaning',
                name: 'Миття килимів',
                link: '/services/carpet-cleaning',
            },
            {
                id: 'window-cleaning',
                name: 'Миття вікон',
                link: '/services/window-cleaning',
            },
            {
                id: 'household-chores',
                name: 'Рутинні роботи',
                link: '/services/household-chores',
            },
            { id: 'other', name: 'Інші послуги', link: '/services/other' },
        ],
    },
    { id: 'about', name: 'Про нас', link: '/about' },
    { id: 'photos', name: 'Фото', link: '/photos' },
    { id: 'prices', name: 'Ціни', link: '/prices' },
    { id: 'reviews', name: 'Відгуки', link: '/reviews' },
    { id: 'blog', name: 'Блог', link: '/blog' },
    { id: 'contacts', name: 'Контакти', link: '/contacts' },
];

function HeaderMenu() {
    return (
        <div className="header-menu__items">
            {HEADER_MENU_ITEMS.map((item) => (
                <HeaderDropdown
                    key={item.id}
                    name={item.name}
                    link={item.link}
                    options={item.options}
                />
                // <a key={item.id} href={item.link} className="header-menu__item">
                //     {item.name}
                // </a>
            ))}
        </div>
    );
}

export default HeaderMenu;
