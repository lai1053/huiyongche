import Vue from 'vue'

const cityInfo = {
  state: {
    city: {},
    currentCityIsLimit: false,
    coordinateInfo: { lon: '116.332249', lat: '39.765103' },
    limitRowCity: [],
    limitCityInfo: {},
    oliStation: []
  },
  mutations: {
    INIT_CITYDATA: (state, params) => {
      state.city = params
    },
    MODIFY_CITY_LIMIT_INFO: (state, params) => {
      state.currentCityIsLimit = params
    },
    INIT_COORDINATE_INFO: (state, params) => {
      state.coordinateInfo = params
    },
    INIT_LIMITROWCITY_DATA: (state, params) => {
      state.limitRowCity = params
    },
    INIT_LIMITCITY_DATA: (state, params) => {
      state.limitCityInfo = params
    },
    INIT_OLISTATION_INFO: (state, params) => {
      state.oliStation = params
    }
  },
  actions: {
    async initCityData({ commit, state }, params) {
      if (!state.city.city) {
        let res = await Vue.prototype.$api.getCityInfo(params)
        if (res.head.errorCode === '0') {
          commit('INIT_CITYDATA', res.body)
        }
      }
    },
    async initLimitRowCity({ commit, state }, params) {
      if (!state.limitRowCity.length) {
        let res = await Vue.prototype.$api.getLimitRowCity(params)
        if (res.head.errorCode === '0') {
          commit('INIT_LIMITROWCITY_DATA', res.body)
        }
      }
    },
    async initLimitCityInfo({ commit, state }, params) {
      if (!Object.keys(state.limitCityInfo).length) {
        let res = await Vue.prototype.$api.getLimitRow(params)
        if (res.head.errorCode === '0') {
          commit('INIT_LIMITCITY_DATA', res.body)
        }
      }
    },
    async initOilStation({ commit, state }, params) {
      if (!state.oliStation.length) {
        let res = await Vue.prototype.$api.getOilStation(params)
        if (res.head.errorCode === '0') {
          commit('INIT_OLISTATION_INFO', res.body.data || [])
        }
      }
    }
  }
}

export default cityInfo
