export const state = () => ({
  room: undefined,
  isPublished: false
})

export const mutations = {
  setRoom(state, room) {
    state.room = room;
  },
  removeRoom(state) {
    state.room = undefined;
  },
  publish(state, boolean) {
    state.isPublished = boolean;
  }
}