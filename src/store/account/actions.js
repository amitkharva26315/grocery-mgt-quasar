/*
export function someAction (context) {
}
*/
import { userService } from '../../_services';
import Router from '../../router'
export function login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    userService.login(username, password)
        .then(
            user => {
                commit('loginSuccess', user);
                Router().push('/');
            },
            error => {
                commit('loginFailure', error);
                dispatch('alert/error', error, { root: true });
            }
        );
}
export function logout({ commit }) {
    userService.logout();
    commit('logout');
}
export function register({ dispatch, commit }, user) {
    commit('registerRequest', user);

    userService.register(user)
        .then(
            user => {
                commit('registerSuccess', user);
                Router().push('/login');
                setTimeout(() => {
                    // display success message after route change completes
                    dispatch('alert/success', 'Registration successful', { root: true });
                })
            },
            error => {
                commit('registerFailure', error);
                dispatch('alert/error', error, { root: true });
            }
        );
}