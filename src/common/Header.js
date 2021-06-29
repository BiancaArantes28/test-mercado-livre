import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as ProductsActions from '../store/actions/products/productsActions';
import '../styles/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/logo.png';

const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSearch = useCallback((e) => {
        const { value } = e.target;

        setSearch(value);
    }, []);

    const searchByProduct = useCallback(() => {
        dispatch(ProductsActions.fetchProducts(search));
    }, [dispatch, search]);
    return (
        <div className="header">
            <div className="content-header">
                <div className="header-logo">
                    <img src={Logo} alt="Mercado Livre" />
                </div>
                <div className="content-input">
                    <input type="text" name="search" value={search} onChange={handleSearch} />
                    <button onClick={searchByProduct}>
                        <FontAwesomeIcon icon={faSearch} />
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;