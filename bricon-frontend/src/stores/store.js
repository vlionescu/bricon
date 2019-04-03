import { applyMiddleware, createStore } from 'redux';

import localstorageSetter from '../middlewares/localhost.middleware';

import {
    ADD_PRODUCT_TO_BASKET,
    ADD_PRODUCTS_TO_BASKET,
    UPDATE_PRODUCT_FROM_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    CLEAR_PRODUCTS_FROM_BASKET,
} from '../constants/action-types'

const initialState = {
    products: []
};

const products = (state = initialState, action) => {
    const products = [...state.products];
    const index = products.findIndex(product => product.id === action.id);

    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            if(index >= 0) {
                products[index].number = products[index].number + action.number;
            } else {
                products.push({
                    id: action.id,
                    quantity: action.quantity,
                });
            }

            return {
                ...state,
                ...{ products }
            };

        case ADD_PRODUCTS_TO_BASKET:
            return {
                ...state,
                ...{ products: [...action.products] }
            };

        case UPDATE_PRODUCT_FROM_BASKET:
            products.forEach(product => {
                if(product.id === action.id) product.quantity = action.quantity;
            });

            return {
                ...state,
                ...{ products }
            };

        case REMOVE_PRODUCT_FROM_BASKET:
            if(index < 0) {
                return state;
            }

            products.splice(index, 1);

            return {
                ...state,
                ...{ products }
            };

        case CLEAR_PRODUCTS_FROM_BASKET:
            return {
                ...state,
                ...{ products: [] }
            };

        default:
            return state;
    }

};

const configureStore = (state = initialState) => createStore(products, state, applyMiddleware(localstorageSetter));


export default configureStore();
