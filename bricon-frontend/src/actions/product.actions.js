import {
    ADD_PRODUCT_TO_BASKET,
    ADD_PRODUCTS_TO_BASKET,
    UPDATE_PRODUCT_FROM_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    CLEAR_PRODUCTS_FROM_BASKET,
} from '../constants/action-types';

const addProduct = (id, quantity) => ({
    type: ADD_PRODUCT_TO_BASKET,
    id,
    quantity,
});

const addProducts = products => ({
    type: ADD_PRODUCTS_TO_BASKET,
    products,
});

const updateProduct = (id, quantity) => ({
    type: UPDATE_PRODUCT_FROM_BASKET,
    id,
    quantity,
});

const removeProduct = id => ({
    type: REMOVE_PRODUCT_FROM_BASKET,
    id,
});

const clearProducts = () => ({
    type: CLEAR_PRODUCTS_FROM_BASKET,
});

export { addProduct, addProducts, updateProduct, removeProduct, clearProducts };
