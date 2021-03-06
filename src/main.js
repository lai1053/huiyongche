// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'

import './base'
import './api' // 导入api
import 'amfe-flexible' // 自适应布局
import './icons' // svg图标 <svg-icon icon-class="id"/>
import './errorLog'
import './permission'

if (process.env.NODE_ENV === 'development') {
  require('./mock') // simulation data`
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
