import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_PRODUCTS,
    fetchProductsSuccessful,
    fetchProductsFailed,
} from '../../actions/products/productsActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';

export function* doFetchProducts(action) {
    try {
        const serviceBaseurl = getAPIURL();
        // const url = `${serviceBaseurl}/items?key=52d6c330`;
        const url = `http://demo7207789.mockable.io/mla/search?q=${action.payload}`;

        const payload = yield call(fetchGet, url);

        yield put(fetchProductsSuccessful(payload));
    } catch (error) {
        yield put(fetchProductsFailed(error));
    }
}

export const ProductsSagas = [
    takeLatest(FETCH_PRODUCTS, doFetchProducts),
];
