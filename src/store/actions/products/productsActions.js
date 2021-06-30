export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESSFUL = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';
export const CHANGE_SUCCESS = 'CHANGE_SUCCESS';

export const FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL';
export const FETCH_PRODUCT_DETAIL_SUCCESSFUL = 'FETCH_PRODUCT_DETAIL_SUCCESSFUL';
export const FETCH_PRODUCT_DETAIL_FAILED = 'FETCH_PRODUCT_DETAIL_FAILED';

export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload,
});

export const fetchProductsSuccessful = (payload) => ({
    type: FETCH_PRODUCTS_SUCCESSFUL,
    payload,
});

export const fetchProductsFailed = (error) => ({
    type: FETCH_PRODUCTS_FAILED,
    payload: error,
});

export const fetchProductDetail = (payload) => ({
    type: FETCH_PRODUCT_DETAIL,
    payload,
});

export const fetchProductDetailSuccessful = (payload) => ({
    type: FETCH_PRODUCT_DETAIL_SUCCESSFUL,
    payload,
});

export const fetchProductDetailFailed = (error) => ({
    type: FETCH_PRODUCT_DETAIL_FAILED,
    payload: error,
});
