export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESSFUL = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

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
