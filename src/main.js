import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

import App from './App';
import store from './store';

Vue.config.productionTip = false;

// Configure Vue toastification
const toastDefaults = {

};

Vue.use(Toast, toastDefaults);

/* eslint-disable no-new */
new Vue({
  store,
  vuetify,
  el: '#app',
  components: { App },
  template: '<App/>',
});
