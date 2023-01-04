import React from 'react';
import { PHONE_NUMBER } from '../constants';

function HeaderPhone() {
    return (
        <div>
            <a href={`tel:${PHONE_NUMBER}`} className="header-phone">
                {PHONE_NUMBER}
            </a>
        </div>
    );
}

export default HeaderPhone;
