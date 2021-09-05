export const actions = {
  async nuxtServerInit({ commit }) {
    const np = await fetch("https://orelha.xyz/api/nowplaying/3a_orelha").then(
      (res) => res.json())
    commit('radio/SET_RADIO', np)
  }
}
