import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductsActions from '../../store/actions/products/productsActions';
import ProductsComponent from './ProductsComponent';

const ProductsContainer = () => {
    const { categories, products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const searchProducts = useCallback((payload) => {
        dispatch(ProductsActions.fetchProducts(payload));
    }, [dispatch]);
    return <ProductsComponent 
        categories={categories}
        products={products} 
        searchProducts={searchProducts} />
};

export default ProductsContainer;