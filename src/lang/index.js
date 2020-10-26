import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import ElementLocale from 'element-ui/lib/locale'
import enLocale from '@/lang/modules/en'
import zhLocale from '@/lang/modules/zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

function getLanguage() {
  if (localStorage && localStorage.locale) {
    return localStorage.locale
  }
  // 使用系统语言，如果语言文件中没有则使用 en
  return (navigator.language || 'en').split('-')[0]
}

const i18n = new VueI18n({
  locale: getLanguage(),
  fallbackLocale: 'en',
  messages
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
