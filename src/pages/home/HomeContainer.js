import React from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from './HomeComponent';

const HomeContainer = () => {
    const { success } = useSelector((state) => state.products);
    return <HomeComponent success={success} />;
};

export default HomeContainer;