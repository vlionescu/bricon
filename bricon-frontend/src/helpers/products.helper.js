import makeCall from '../services/http.service';

const addProduct = product => {
    return makeCall({
        path: '/products',
        method: 'POST',
        formData: product,
    }).then(res => res);
};

const getProducts = () => {
    return makeCall({
        path: '/products',
    }).then(res => res.products)
};

const getProduct = (id) => {
    return makeCall({
        path: `/products/${id}`,
    }).then(res => res.product)
};

const searchProducts = (ids) => {
    return makeCall({
        path: '/products/search',
        method: 'POST',
        data: ids,
    }).then(res => res.products)
};

export default {
    getProducts,
    getProduct,
    addProduct,
    searchProducts,
}
