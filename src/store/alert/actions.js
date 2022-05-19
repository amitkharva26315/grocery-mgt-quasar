/*
export function someAction (context) {
}
*/
export function success({ commit }, message) {
    commit('success', message);
}
export function error({ commit }, message) {
    commit('error', message);
}
export function clear({ commit }) {
    commit('clear');
}