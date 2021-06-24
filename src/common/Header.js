import React from 'react';
import '../styles/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                        <FontAwesomeIcon icon={faSearch} />
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;