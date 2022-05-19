/*
export function someMutation (state) {
}
*/
export function loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
}
export function loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
}
export function loginFailure(state) {
    state.status = {};
    state.user = null;
}
export function logout(state) {
    state.status = {};
    state.user = null;
}
export function registerRequest(state, user) {
    state.status = { registering: true };
}
export function registerSuccess(state, user) {
    state.status = {};
}
export function registerFailure(state, error) {
    state.status = {};
}