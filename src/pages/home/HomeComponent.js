import React from 'react';
import { Redirect } from 'react-router-dom';

const HomeComponent = ({ success }) => {
    if (success) {
        return <Redirect to="/products" />
    }
    return (<div className="mercado-libre-home" />);
};

export default HomeComponent;