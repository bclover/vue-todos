import Vue from 'vue';
import Vuex from 'vuex';
import * as todos from './modules/todos';
import * as user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos,
    user,
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
