import Vue from 'vue';
import Vuex from 'vuex';
import * as posts from './modules/posts';
import * as user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    posts,
    user,
  },

  state: {
    name: 'Bryan Clover',
    title: 'Senior Front-End Engineer',
  },

  getters: {
    candidateName: state => state.name,
    candidateTitle: state => state.title,
  },
});

export default store;
