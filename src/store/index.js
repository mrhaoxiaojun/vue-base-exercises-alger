// 导入vue和vuex
// Import vue and vuex
import Vue from 'vue'
import Vuex from 'vuex'
// vue注册插件vuex
// vue registration plugin vuex
Vue.use(Vuex)

// Export vuex
export default new Vuex.Store({
  // state属性存放全局数据变量
  // The state attribute stores global data variables
  state: {
    count: 0,
  },
  // 计算属性 Calculated attributes
  getters: {
    evenNumber: state => {
      // 参数state是全局数据变量 
      // The parameter state is a global data variable
      // 返回计算结果
      // Return calculation result
      return state.count % 2 ? false : true
    }
  },
  // 同步执行属性
  // Synchronous execution attributes
  mutations: {
    increment(state, val = 1) {
      // state：全局数据变量,固定接收，位置不变
      // state：Global data variable, fixed reception, unchanged position
      // val：调用方传递的参数
      // val：Parameters passed by the caller
      state.count += val;
    },
    decrement(state, val = 1) {
      state.count -= val;
    }
  },
  // 异步执行属性
  // Asynchronous execution properties
  actions: {
    incrementAsync({ commit }, val = 1) {
      // commit: 提交到'"mutations'
      // commit: "Submit to'"mutations'
      // val：调用方传递的参数
      // val：Parameters passed by the caller
      setTimeout(() => {
        commit('increment', val)
      }, 1000)
    },
    decrementAsync({ commit }, val = 1) {
      setTimeout(() => {
        commit('decrement', val)
      }, 1000)
    }
  },
  // 模块，暂时用不到 Module, temporarily unused
  modules: {
  }
})
