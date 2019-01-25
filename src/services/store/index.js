import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
