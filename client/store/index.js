export const state = () => ({
  authenticated: false,
  accessToken: undefined,
  refreshToken: undefined
})

export const mutations = {
  authenticate(state, authenticated) {
    state.authenticated = authenticated;
  },
  addSpotifyAccess(state, token) {
    state.accessToken = token;
  },
  addSpotifyRefresh(state, token) {
    state.refreshToken = token;
  },
  removeSpotifyAccess(state, token) {
    state.accessToken = undefined;
  },
  removeSpotifyRefresh(state, token) {
    state.refreshToken = undefined;
  },
}