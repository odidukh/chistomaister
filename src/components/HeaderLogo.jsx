import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../assets/white_logo_transparent_background.png';

function HeaderLogo() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <button onClick={handleClick}>
                <img src={MainLogo} alt="logo" className="header-logo" />
            </button>
        </div>
    );
}

export default HeaderLogo;
