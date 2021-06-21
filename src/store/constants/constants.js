// ACTION NAMESPACES
const GET_NAMESPACE = 'big.nerd.ranch.blog.get';
const SET_NAMESPACE = 'big.nerd.ranch.blog.set';

// LOADING ACTIONS
export const GET_LOADING_STATUS = `${GET_NAMESPACE}.loading.status`;
export const SET_LOADING_STATUS = `${SET_NAMESPACE}.loading.status`;

// POST ACTIONS
export const GET_ALL_POSTS = `${GET_NAMESPACE}.all.posts`;
export const SET_ALL_POSTS = `${SET_NAMESPACE}.all.posts`;

export const GET_OTHER_POSTS = `${GET_NAMESPACE}.other.posts`;
export const SET_OTHER_POSTS = `${SET_NAMESPACE}.other.posts`;

export const GET_OTHER_POSTS_TOTAL = `${GET_NAMESPACE}.other.posts.total`;
export const SET_OTHER_POSTS_TOTAL = `${SET_NAMESPACE}.other.posts.total`;

export const GET_USER_POSTS = `${GET_NAMESPACE}.user.posts`;
export const SET_USER_POSTS = `${SET_NAMESPACE}.user.posts`;

export const GET_USER_POSTS_TOTAL = `${GET_NAMESPACE}.user.posts.total`;
export const SET_USER_POSTS_TOTAL = `${SET_NAMESPACE}.user.posts.total`;

// USER ACTIONS
export const GET_CURRENT_USER_ID = `${GET_NAMESPACE}.current.user.id`;
export const SET_CURRENT_USER_ID = `${SET_NAMESPACE}.current.user.id`;
