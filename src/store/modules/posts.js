import find from 'ramda/src/filter';
import propEq from 'ramda/src/propEq';
import propOr from 'ramda/src/propOr';
import without from 'ramda/src/without';
import PostsService from '../../services/PostsService';

export const state = {
  allPosts: [],
  loadingStatus: false,
  otherPosts: [],
  userPosts: [],
};

export const actions = {
  async getAllPosts(context) {
    context.commit('SET_LOADING_STATUS', true);
    const response = await PostsService.getPosts();
    const allPosts = propOr([], 'data', response);
    context.commit('SET_ALL_POSTS', allPosts);
    context.commit('SET_USER_POSTS');
    context.commit('SET_OTHER_POSTS');
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
  SET_ALL_POSTS(state, posts) {
    state.allPosts = posts;
  },
  SET_OTHER_POSTS(state) {
    state.otherPosts = without(state.userPosts, state.allPosts);
  },
  SET_USER_POSTS(state) {
    state.userPosts = find(propEq('userId', 1), state.allPosts);
  },
};
