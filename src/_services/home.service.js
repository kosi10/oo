import config from 'config';
import { handleResponse, requestOptions } from '../_helpers';

export const homeService = {
    getAll,
    getById
};

function getAll() {
    return fetch(`${config.apiUrl}/homes`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`${config.apiUrl}/homes/${id}`, requestOptions.get())
        .then(response => {
            const data = response.text && JSON.parse(response.text);
            return data;
        });
}