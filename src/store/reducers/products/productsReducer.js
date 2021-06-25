import _ from 'lodash';
import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESSFUL,
    FETCH_PRODUCTS_FAILED,
} from '../../actions/products/productsActions';
import { STATUS } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: STATUS.NOT_FETCHED,
    products: [],
};

const successfulProducts = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        products: payload.items,
    }
};

export default function productsReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state, status: STATUS.INPROGRESS,
            };

        case FETCH_PRODUCTS_SUCCESSFUL:
            return successfulProducts(state, action.payload);

        case FETCH_PRODUCTS_FAILED:
            return {
                ...state, status: STATUS.FETCHED, error: action.payload
            }

        default:
            return state;
    }
}