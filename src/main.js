import Vue from 'vue'
import router from './router'
import store from './store'
import axios from '@/utils/axios'
import moment from 'moment'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import waterfall from 'vue-waterfall2'

import App from './App.vue'

Vue.use(ViewUI)
Vue.use(mavonEditor)
Vue.use(waterfall)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
