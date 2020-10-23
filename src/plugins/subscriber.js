export default {
  install(Vue, options) {
    Vue.prototype.$socket = null;

    Vue.prototype.$getBinanceBody = async function (symbol, $store) {
      const response = await fetch(`https://www.binance.com/api/v1/depth?symbol=${symbol}&limit=500`);
      const data = await response.json();
      await $store.commit('setLastUpdateId', data.lastUpdateId);
      return data;
    }

    Vue.prototype.$subscribe = function (symbol, $store) {
      if (!Vue.prototype.$socket) {
        Vue.prototype.$socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth@1000ms`);
        Vue.prototype.$socket.onmessage = async function (message) {
          await $store.dispatch('setDepth', JSON.parse(message.data));
        };
      } else {
        Vue.prototype.$socket.close();
        Vue.prototype.$socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth@1000ms`);
        Vue.prototype.$socket.onmessage = async function (message) {
          await $store.dispatch('setDepth', JSON.parse(message.data));
        };
      }
    }
    Vue.prototype.$unsubscribe = function () {
      if (Vue.prototype.$socket) {
        Vue.prototype.$socket.close()
        Vue.prototype.$socket = null;
      }
    }
  },
}