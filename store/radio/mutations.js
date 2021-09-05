// commit and track state changes
// called by actions, update state
export default {
  SET_RADIO(state, payload) {
    state = payload
    // state.station = payload.station
    // state.listeners = payload.station
    // state.live = payload.live
    // state.now_playing = payload.now_playing
    // state.playing_next = payload.playing_next
    // state.song_history = payload.song_history
  },
}
