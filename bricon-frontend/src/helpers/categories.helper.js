import makeCall from '../services/http.service';

const getCategories = () => {
    return makeCall({
        path: '/categories',
        method: 'GET',
    }).then(res => res.categories);
};

export default {
    getCategories,
}
