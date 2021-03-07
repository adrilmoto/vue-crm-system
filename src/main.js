import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/Loader'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('date', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyBCHbRcuer7j-KLBLtFTQzDoCnb-cA6XVw",
  authDomain: "vue-crm-system-80dd2.firebaseapp.com",
  projectId: "vue-crm-system-80dd2",
  storageBucket: "vue-crm-system-80dd2.appspot.com",
  messagingSenderId: "920293565997",
  appId: "1:920293565997:web:3aa246526a9e51d9c87aa4",
  measurementId: "G-P2J5CJ5RME"
})
let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
