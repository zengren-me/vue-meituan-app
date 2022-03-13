import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCity: '北京',
    searchHistory: [],
    user: null,
    foodName: '',
  },
  mutations: {
    changeCity(state, val) {
      state.currentCity = val;
    },
    setHistory(state, list) { // 用作历史记录的数据还原
      state.searchHistory = list;
    },
    getUser(state, value) {
      state.user = value;
    },
    setFoodName(state, val) {
      state.foodName = val;
    },
    changeHistory(state, { type, value }) { // 搜索后对历史记录进行处理
      if (type === 'set') {
        // 如果搜索的是存在于历史记录中的数据，那么让该数据排到历史记录最前面
        const request = state.searchHistory.filter((item) => item.value === value);
        if (request.length) {
          request[0].time = new Date().getTime();
          state.searchHistory = state.searchHistory.sort((a, b) => b.time - a.time);
        } else {
          const obj = {
            value,
            time: new Date().getTime(),
          };
          state.searchHistory.unshift(obj);
        }
        localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
      } else if (type === 'remove') {
        state.searchHistory = [];
        localStorage.removeItem('searchHistory');
      }
    },
  },
  actions: {
    changeCity({ commit }, val) {
      commit('changeCity', val);
    },
    getLocalUser({ commit }) {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      commit('getUser', userInfo);
      return userInfo;
    },
  },
  modules: {
  },
});
