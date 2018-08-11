import axios from 'axios';

const API_ROOT = "http://localhost:8080/api/v1";

const apiCall = (endpoint, obj) => {
    let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return axios.post(fullUrl, obj)
        .then(
            response => ({response: response.data}),
            error => ({error: error.message || 'Something bad happened'})
        );
};

export const postConvertWordsToTNine = (obj = {}) => apiCall("/convertWordsToTNine", obj);