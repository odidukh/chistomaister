import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderPhone from './HeaderPhone';

function Header() {
    return (
        <div className="header">
            <HeaderLogo />
            <HeaderMenu />
            <HeaderPhone />
        </div>
    );
}

export default Header;
