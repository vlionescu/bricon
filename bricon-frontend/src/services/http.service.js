const BASE_URL = 'http://localhost:2000';

const makeCall = async ({path, method = 'GET', data, formData}) => {
    const url = `${BASE_URL}${path}`;
    const options = {
        method,
    };

    if (method === 'POST') {
        if(data) {
            options.headers = {'Content-Type': 'application/json'};
            options.body = JSON.stringify(data);
        }
        if(formData) {
            options.body = formData;
        }
    }
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(resp => resp.json())
            .then(resp => {
                return resp.success ? resolve(resp.payload) : reject(resp);
            });
    });
};

export default makeCall;
