import find from 'ramda/src/filter';
import propEq from 'ramda/src/propEq';
import propOr from 'ramda/src/propOr';
import without from 'ramda/src/without';
import TodosService from '../../services/TodosService';

export const state = {
  allPosts: [],
  loadingStatus: false,
  otherPosts: [],
  userPosts: [],
};

export const actions = {
  async getAllTodos(context) {
    context.commit('SET_LOADING_STATUS', true);
    const response = await TodosService.getTodos();
    const allPosts = propOr([], 'data', response);
    context.commit('SET_ALL_TODOS', allPosts);
    context.commit('SET_USER_TODOS');
    context.commit('SET_OTHER_TODOS');
    context.commit('SET_LOADING_STATUS', false);
  },
};

export const getters = {
  loading: state => state.loadingStatus,
  otherPosts: state => state.otherPosts,
  totalOtherPosts: state => state.otherPosts.length,
  totalUserPosts: state => state.userPosts.length,
  userPosts: state => state.userPosts,
};

export const mutations = {
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },
  SET_ALL_TODOS(state, posts) {
    state.allPosts = posts;
  },
  SET_OTHER_TODOS(state) {
    state.otherPosts = without(state.userPosts, state.allPosts);
  },
  SET_USER_TODOS(state) {
    state.userPosts = find(propEq('userId', 1), state.allPosts);
  },
};
