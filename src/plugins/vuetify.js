import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  customProperties: true,
  theme: {
    themes: {
      light: {
        primary: '#214395',
        secondary: '#f96700',
        smoke: 'F5F5F5',
      },
    },
  },
};

export default new Vuetify(opts);
