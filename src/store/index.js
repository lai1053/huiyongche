import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import errorLog from './modules/errorLog'
import user from './modules/user'
import carRental from './modules/carRental'
import certificate from './modules/certificate'
import tabbar from './modules/tabbar'
import rent from './modules/rent'
import vehicles from './modules/vehicles'
import cityInfo from './modules/city'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    user,
    carRental,
    certificate,
    tabbar,
    rent,
    vehicles,
    cityInfo
  },
  getters
})

export default store
