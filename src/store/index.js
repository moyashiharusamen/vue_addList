import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [
      { id: 3, comment: 'comment1', number: 111, text: 'hoge' },
      { id: 2, comment: 'comment1', number: 222, text: 'fuga' },
      { id: 1, comment: 'comment1', number: 333, text: 'piyo' }
    ]
  },
  getters: {
    list (state) { return state.list }
  },
  mutations: {
    setInput (state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    doUpdate ({ commit }, list) {
      commit('setInput', list)
    }
  }
})

export default store
