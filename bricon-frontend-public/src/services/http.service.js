const BASE_URL = 'http://localhost:2000';

const makeCall = async ({path, method, data}) => {
    const url = `${BASE_URL}${path}`;
    const options = {
        method,
    };

    if (method === 'POST') {
        options.headers = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(data);
    }
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(resp => resp.json())
            .then(resp => {
                return resp.success ? resolve(resp.payload.articles) : reject(resp);
            });
    });
};

export default makeCall;
