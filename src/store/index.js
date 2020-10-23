import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbol: 'BTCUSDT',
    lastUpdateId: '',
    depth: null,
    diff: ''
  },
  mutations: {
    setSymbol(state, symbol) {
      console.log('setted');
      state.symbol = symbol;
    },
    setLastUpdateId(state, id) {
      console.log('updated');
      state.lastUpdateId = id;
    },
    setDepth(state, depth) {
      if (!(depth.u <= state.lastUpdateId)) {
        state.depth = {
          bids: depth.b.filter((tuple) => tuple[1] != 0),
          asks: depth.a.filter((tuple) => tuple[1] != 0),
        }
      }
    },
    setDiff(state, diff) {
      state.diff = diff;
    }
  },
  actions: {
    setDepth({ commit }, depth) {
      commit('setDepth', depth);
      commit('setDiff', depth);
    }
  },
  getters: {
    symbol: (state) => state.symbol,
    lastUpdateId: (state) => state.lastUpdateId,
    depth: (state) => state.depth,
    diff: (state) => state.diff
  }
})
