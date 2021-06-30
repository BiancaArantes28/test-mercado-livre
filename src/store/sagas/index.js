import { all } from 'redux-saga/effects';

import { ProductsSagas } from './products/productsSaga';
import { ProductDetailSagas } from './products/productDetailSaga';

export default function* rootSagas() {
    return yield all([
        ...ProductsSagas,
        ...ProductDetailSagas,
    ]);
}
