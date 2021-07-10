import propEq from 'ramda/src/propEq';
import propOr from 'ramda/src/propOr';
import reject from 'ramda/src/reject';
import TodosService from '../../services/TodosService';

export const state = {
  todos: [],
  loadingStatus: false,
};

export const actions = {
  addTodo(context, newTodo) {
    context.commit('ADD_TODO', newTodo);
  },
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
  removeTodo(context, todoId) {
    context.commit('REMOVE_TODO', todoId);
  },
};

export const getters = {
  loading: state => state.loadingStatus,
  todos: state => state.todos,
  totalNumTodos: state => state.todos.length,
};

export const mutations = {
  ADD_TODO(state, newTodo) {
    state.todos.push(newTodo);
  },
  CLEAR_TODOS(state) {
    state.todos = [];
  },
  REMOVE_TODO(state, todoId) {
    state.todos = reject(propEq('id', todoId))(state.todos);
  },
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },
  SET_ALL_TODOS(state, todos) {
    state.todos = todos;
  },
};
