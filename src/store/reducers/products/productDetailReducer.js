import _ from 'lodash';
import {
    FETCH_PRODUCT_DETAIL,
    FETCH_PRODUCT_DETAIL_SUCCESSFUL,
    FETCH_PRODUCT_DETAIL_FAILED,
} from '../../actions/products/productsActions';
import { STATUS } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: STATUS.NOT_FETCHED,
    product: {},
    success: false,
};

const successfulProductDetail = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        product: payload.item,
        success: true,
    }
};

export default function productReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_PRODUCT_DETAIL:
            return {
                ...state, status: STATUS.INPROGRESS, product: {}, success: false,
            };

        case FETCH_PRODUCT_DETAIL_SUCCESSFUL:
            return successfulProductDetail(state, action.payload);

        case FETCH_PRODUCT_DETAIL_FAILED:
            return {
                ...state, status: STATUS.FETCHED, product: {}, success: false,
            };

        default:
            return state;
    };
}
