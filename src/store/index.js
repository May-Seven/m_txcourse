import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations
});

export default store;

// index.js   vuex 的配置   vuex的出口文件

// state.js   集中式状态管理容器
// mutations.js   操作这些状态变化的方法集合