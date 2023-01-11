import React from 'react';

const HEADER_MENU_ITEMS = [
    { id: 'services', name: 'Послуги', link: '/services' },
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
                <a key={item.id} href={item.link} className="header-menu__item">
                    {item.name}
                </a>
            ))}
        </div>
    );
}

export default HeaderMenu;
