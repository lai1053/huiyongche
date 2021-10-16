import Vue from 'vue'
import router from './router'
import History from './router/history'
import store from './store'

function popstateHandle () {
  // console.log('监听了返回键')
  router.isBack = true
  let el = document.getElementById('app')
  if (el) el.setAttribute('transition-direction', 'back')
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.isLogin) {
      console.log(to.path)
      // 检测是否登录
      store.dispatch('isLogin').then(res => {
        if (res.data.isLogin) {
          // 获取用户信息
          if (!store.state.user.userInfo) {
            store.dispatch('getInfo')
          }
          next()
        } else {
          next({path: `/login?redirect=${to.path}`, replace: true})
        }
      })
    } else {
      // 获取用户信息
      if (!store.state.user.userInfo) {
        store.dispatch('getInfo')
      }
      next()
    }
  } else {
    next()
  }

  // 路由跳转动画
  if (to.meta.disAnimation || router.disAnimation) {
    Vue.prototype.$transition = null
    router.disAnimation = false
  } else {
    Vue.prototype.$transition = 'fade-effect'
  }

  // 路由历史
  if (router.isBack) {
    History.pop()
    router.isBack = false
  } else {
    History.push(to.path)
  }

  // 返回键监听
  window.addEventListener('popstate', popstateHandle, false)

  // 是否显示底部导航栏
  store.commit('SET_TABBAR_SHOW', to.meta.showTab)
})
