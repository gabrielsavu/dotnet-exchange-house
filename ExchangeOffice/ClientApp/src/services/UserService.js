import {AuthHeader, HandleResponse} from '../helpers';

export const UserService = {
    getAll
};

function getAll() {
    const requestOptions = {method: 'GET', headers: AuthHeader()};
    return fetch(`user`, requestOptions).then(HandleResponse);
}