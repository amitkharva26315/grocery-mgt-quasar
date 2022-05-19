/*
export function someAction (context) {
}
*/
import { userService } from '../../_services';
export function getAll({ commit }) {
    commit('getAllRequest');

    userService.getAll()
        .then(
            users => commit('getAllSuccess', users),
            error => commit('getAllFailure', error)
        );
}

export function deleteUser({ commit }, id) {
    commit('deleteRequest', id);

    userService.delete(id)
        .then(
            user => commit('deleteSuccess', id),
            error => commit('deleteFailure', { id, error: error.toString() })
        );
}