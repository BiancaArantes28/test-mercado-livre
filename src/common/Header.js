import React from 'react';
import '../styles/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/logo.png';



const Header = () => {
    return (
        <div className="header">
            <div className="content-header">
                <div className="header-logo">
                    <img src={Logo} />
                </div>
                <div className="content-input">
                    <input type="text" name="search" />
                    <button>
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;