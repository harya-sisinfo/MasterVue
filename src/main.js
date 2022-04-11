import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// Session
import VueSession from "vue-session";

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(VueSession);
axios.interceptors.request.use(function (config) {
  // Ambil token
  const token = localStorage.getItem('token')

  // Jika access token ada, set authorization header tiap request
  if (token) {
    config.headers.Authorization =  `Bearer ${token}`;
  }

  return config;
}, function (error) {
  // Do something with request error
  //if (DEBUG) { console.error("Error", error); }
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
