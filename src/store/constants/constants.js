// ACTION NAMESPACES
const GET_NAMESPACE = 'bryan.clover.get';
const SET_NAMESPACE = 'bryan.clover.set';

// LOADING ACTIONS
export const GET_LOADING_STATUS = `${GET_NAMESPACE}.loading.status`;
export const SET_LOADING_STATUS = `${SET_NAMESPACE}.loading.status`;

// POST ACTIONS
export const GET_ALL_TODOS = `${GET_NAMESPACE}.all.todos`;
export const SET_ALL_TODOS = `${SET_NAMESPACE}.all.todos`;

export const GET_OTHER_TODOS = `${GET_NAMESPACE}.other.todos`;
export const SET_OTHER_TODOS = `${SET_NAMESPACE}.other.todos`;

export const GET_OTHER_TODOS_TOTAL = `${GET_NAMESPACE}.other.todos.total`;
export const SET_OTHER_TODOS_TOTAL = `${SET_NAMESPACE}.other.todos.total`;

export const GET_USER_TODOS = `${GET_NAMESPACE}.user.todos`;
export const SET_USER_TODOS = `${SET_NAMESPACE}.user.todos`;

export const GET_USER_TODOS_TOTAL = `${GET_NAMESPACE}.user.todos.total`;
export const SET_USER_TODOS_TOTAL = `${SET_NAMESPACE}.user.todos.total`;

// USER ACTIONS
export const GET_CURRENT_USER_ID = `${GET_NAMESPACE}.current.user.id`;
export const SET_CURRENT_USER_ID = `${SET_NAMESPACE}.current.user.id`;
