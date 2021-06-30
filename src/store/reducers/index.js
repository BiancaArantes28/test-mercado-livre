import { combineReducers } from 'redux';

import productsReducer from './products/productsReducer';
import productDetailReducer from './products/productDetailReducer';

export default combineReducers({
    products: productsReducer,
    productDetail: productDetailReducer,
});
