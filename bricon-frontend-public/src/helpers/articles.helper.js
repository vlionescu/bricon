import makeCall from '../services/http.service';
import routes from '../config/index';

const getArticles = () => {
    return makeCall({
        path: routes.getArticles,
        method: 'GET',
    })
};

export default {
    getArticles,
}
