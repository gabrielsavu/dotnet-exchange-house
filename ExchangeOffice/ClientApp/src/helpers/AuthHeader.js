import { AuthenticationService } from './services';

export function authHeader() {
    const currentUser = AuthenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token.accessToken}` };
    } else {
        return {};
    }
}