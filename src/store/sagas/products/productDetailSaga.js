import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_PRODUCT_DETAIL,
    fetchProductDetailSuccessful,
    fetchProductDetailFailed,
} from '../../actions/products/productsActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';

export function* doProductDetail(action) {
    try {
        const serviceBaseurl = getAPIURL();
        // const url = `${serviceBaseurl}/items?key=52d6c330`;
        const url = `http://demo7207789.mockable.io/mla/items/${action.payload}`;

        const payload = yield call(fetchGet, url);
        yield put(fetchProductDetailSuccessful(payload));
    } catch (error) {
        yield put(fetchProductDetailFailed(error));
    }
}

export const ProductDetailSagas = [
    takeLatest(FETCH_PRODUCT_DETAIL, doProductDetail),
];
