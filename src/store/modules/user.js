import Vue from 'vue'
import { lStorage } from '@/utils/storage.js'

const user = {
  state: {
    isLogin: false,
    userInfo: ''
  },
  mutations: {
    SET_LOGIN_STATE: (state, params) => {
      state.isLogin = params
    },
    SET_USER_INFO: (state, params) => {
      state.userInfo = params
    }
  },
  actions: {
    // 判断是否登录
    isLogin({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$api
          .isLogin()
          .then(res => {
            commit('SET_LOGIN_STATE', res.data.isLogin)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    // 登录
    login({ commit }, params) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$api
          .login(params)
          .then(res => {
            console.log(res)
            commit('SET_LOGIN_STATE', res.data.isLogin)
            commit('SET_USER_INFO', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    // 获取用户信息
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('userInfo')
        Vue.prototype.$api
          .userInfo()
          .then(res => {
            commit('SET_USER_INFO', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    // 登出
    logout({ commit, state }) {
      // 清除车辆信息
      lStorage.removeItem(lStorage.VEHICLE_INFO)

      return new Promise((resolve, reject) => {
        Vue.prototype.$api
          .logout()
          .then(res => {
            commit('SET_LOGIN_STATE', false)
            commit('SET_USER_INFO', '')
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default user
