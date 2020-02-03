import Vue from 'vue'
import App from './pages/layout'
import router from './router'
import store from './store'
import './global.scss'
import dayjs from 'dayjs'
import filters from '@/utils/filters'
import { Toast, Popup, PasswordInput, NumberKeyboard, Notify, ActionSheet,Dialog } from 'vant'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs

Vue.use(Toast).use(Popup).use(PasswordInput).use(NumberKeyboard).use(Notify).use(ActionSheet).use(Dialog)

// 注册过滤器
filters.map(item => {
  Vue.filter(item.name, item.fn)
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
