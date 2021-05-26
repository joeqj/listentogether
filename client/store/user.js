export const state = () => ({
  authenticated: false,
  user: undefined
})

export const mutations = {
  authenticate(state, authenticated) {
    state.authenticated = authenticated;
  },
  addUser(state, user) {
    state.user = user;
  },
  removeUser(state, token) {
    state.user = undefined;
  }
}