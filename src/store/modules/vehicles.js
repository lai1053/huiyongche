import Vue from 'vue'

const vehicles = {
  state: {
    vehicleInfo: {}
  },
  mutations: {
    INIT_VEHICLE_INFO: (state, params) => {
      state.vehicleInfo = params
    }
  },
  actions: {
    async initVehicleInfo({ commit }, params) {
      let res = await Vue.prototype.$api.queryNewIncome(params)
      if (res.success) {
        commit('INIT_VEHICLE_INFO', res.data)
      }
    }
  }
}

export default vehicles
