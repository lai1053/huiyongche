import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Chinese from './zh'
import English from './en'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh: Chinese,
    en: English
  }
})
