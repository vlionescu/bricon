import makeCall from '../services/http.service';

const getArticles = () => {
    return makeCall({
        path: '/articles',
        method: 'GET',
    })
};

export default {
    getArticles,
}
