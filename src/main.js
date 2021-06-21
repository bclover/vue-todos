// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

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
  el: '#app',
  components: { App },
  template: '<App/>',
});
