import makeCall from '../services/http.service';

const getDownloads = () => {
    return makeCall({
        path: '/downloads',
        method: 'GET',
    }).then(res => res.downloads);
};

export default {
    getDownloads,
}
