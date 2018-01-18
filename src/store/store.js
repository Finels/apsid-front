/**
 * Created by xzc on 2017/12/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {}

/**
 * 创建、暴露一个 Store
 */
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
