import Vue from 'vue'

const rent = {
  state: {
    myIncomeData: {},
    myLeases: []
  },
  mutations: {
    INIT_INCOME_DATA: (state, params) => {
      state.myIncomeData = params
    },
    INIT_LEASE_DATA: (state, params) => {
      state.myLeases = params
    }
  },
  actions: {
    async initIncomeData({ commit }, params) {
      let res = await Vue.prototype.$api.getMyIncome(params)
      if (res.success) {
        commit('INIT_INCOME_DATA', res.data)
      }
    },
    async initMyLeaseList({ commit }, params) {
      let res = await Vue.prototype.$api.getRentList(params)
      if (res.data) {
        commit('INIT_LEASE_DATA', res.data)
      }
    }
  }
}

export default rent
