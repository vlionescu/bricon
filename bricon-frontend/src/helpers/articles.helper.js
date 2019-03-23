import makeCall from '../services/http.service';

const getArticles = () => {
    return makeCall({
        path: '/articles',
        method: 'GET',
    }).then(res => res.articles);
};

export default {
    getArticles,
}
