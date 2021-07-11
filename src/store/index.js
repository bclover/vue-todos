import Vue from 'vue';
import Vuex from 'vuex';
import * as todos from './modules/todos';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos,
  },

  state: {
    name: 'Bryan Clover',
    title: 'Senior UI Engineer',
  },

  getters: {
    candidateName: state => state.name,
    candidateTitle: state => state.title,
  },
});

export default store;
