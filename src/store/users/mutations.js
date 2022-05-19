/*
export function someMutation (state) {
}
*/
export function getAllRequest(state) {
    state.all = { loading: true };
}
export function getAllSuccess(state, users) {
    state.all = { items: users };
}
export function getAllFailure(state, error) {
    state.all = { error };
}
export function deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(user =>
        user.id === id
            ? { ...user, deleting: true }
            : user
    )
}
export function deleteSuccess(state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(user => user.id !== id)
}
export function deleteFailure(state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
    state.all.items = state.items.map(user => {
        if (user.id === id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: error };
        }

        return user;
    })
}