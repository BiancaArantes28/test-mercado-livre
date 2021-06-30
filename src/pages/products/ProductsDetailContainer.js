import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as ProductsActions from '../../store/actions/products/productsActions';
import ProductsDetailComponent from './ProductsDetailComponent';

const ProductsDetailContainer = () => {
    const { id } = useParams();
    const { categories } = useSelector((state) => state.products);
    const { product } = useSelector((state) => state.productDetail);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(ProductsActions.fetchProductDetail(id));
    }, [id, dispatch]);
    return (
        <ProductsDetailComponent product={product} categories={categories} />
    );
};

export default ProductsDetailContainer;