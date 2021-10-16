const tabbar = {
  state: {
    tabbarActive: 0,
    tabbarShow: true
  },
  mutations: {
    SET_TABBAR_ACTIVE: (state, num) => {
      state.tabbarActive = num
    },
    SET_TABBAR_SHOW: (state, bol) => {
      state.tabbarShow = bol
    }
  },
  actions: {
    setTabbarActive ({ commit }, num) {
      commit('SET_TABBAR_ACTIVE', num)
    }
  }
}

export default tabbar
