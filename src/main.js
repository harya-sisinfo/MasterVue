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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
