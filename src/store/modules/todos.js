import propEq from 'ramda/src/propEq';
import propOr from 'ramda/src/propOr';
import reject from 'ramda/src/reject';
import TodosService from '../../services/TodosService';
import {
  MUTATATION_ADD_TODO,
  MUTATATION_CLEAR_ALL_TODOS,
  MUTATATION_REMOVE_TODO,
  MUTATATION_SET_ALL_TODOS,
  MUTATATION_SET_LOADING_STATUS,
} from '../constants/mutations';

export const state = {
  todos: [],
  loadingStatus: false,
};

export const actions = {

  addTodo(context, newTodo) {
    context.commit(MUTATATION_ADD_TODO, newTodo);
  },

  clearAllTodos(context) {
    context.commit(MUTATATION_CLEAR_ALL_TODOS);
  },

  async getAllTodos(context) {
    context.commit(MUTATATION_SET_LOADING_STATUS, true);
    const response = await TodosService.getTodos();
    const todos = propOr([], 'data', response);
    context.commit(MUTATATION_SET_ALL_TODOS, todos);
    context.commit(MUTATATION_SET_LOADING_STATUS, false);
  },

  removeTodo(context, todoId) {
    context.commit(MUTATATION_REMOVE_TODO, todoId);
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

  CLEAR_ALL_TODOS(state) {
    state.todos = [];
  },

  REMOVE_TODO(state, todoId) {
    state.todos = reject(propEq('id', todoId))(state.todos);
  },

  SET_ALL_TODOS(state, todos) {
    state.todos = todos;
  },

  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },

};
