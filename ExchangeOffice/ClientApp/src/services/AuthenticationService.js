import {BehaviorSubject} from 'rxjs';
import {HandleResponse} from '../helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({email, password})
    };

    return fetch(`api/Authentication/Login`, requestOptions)
        .then(HandleResponse)
        .then(response => {

            localStorage.setItem('currentUser', JSON.stringify(response));
            currentUserSubject.next(response);

            return response;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}