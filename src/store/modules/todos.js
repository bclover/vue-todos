import propOr from 'ramda/src/propOr';
import TodosService from '../../services/TodosService';

export const state = {
  todos: [],
  loadingStatus: false,
};

export const actions = {
  clearAllTodos(context) {
    context.commit('CLEAR_TODOS');
  },
  async getAllTodos(context) {
    context.commit('SET_LOADING_STATUS', true);
    const response = await TodosService.getTodos();
    const todos = propOr([], 'data', response);
    context.commit('SET_ALL_TODOS', todos);
    context.commit('SET_LOADING_STATUS', false);
  },
};

export const getters = {
  loading: state => state.loadingStatus,
  todos: state => state.todos,
  totalNumTodos: state => state.todos.length,
};

export const mutations = {
  CLEAR_TODOS(state) {
    state.todos = [];
  },
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },
  SET_ALL_TODOS(state, todos) {
    state.todos = todos;
  },
};
