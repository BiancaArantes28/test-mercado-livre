import { all } from 'redux-saga/effects';

import { ProductsSagas } from './products/productsSaga';

export default function* rootSagas() {
    return yield all([
        ...ProductsSagas,
    ]);
}
