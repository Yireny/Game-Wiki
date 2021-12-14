import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  // 1. state
  state:{
    isLogin:false,
    navID:0
  },

  // 2. getters
  getters:{
    // 参数列表state指的是state数据
    isLogin(state){
      return state.isLogin;
    },
    navID(state){
      return state.navID
    }
  },

  // 3. actions
  actions:{
    // 设置城市信息
    // 参数列表：{commit, state}
    // state指的是state数据
    // commit调用mutations的方法 
    // name就是调用此方法时要传的参数
    setCityName({commit,state}, name){
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit("setCity", name);
    }
  },

  // 4. mutations
  mutations:{
    login(state){
      state.isLogin = !state.isLogin;
    },
    setLogin(state,boolen){
      state.isLogin = boolen
    },
    changeNav(state,index){
      state.navID =  index
    }
  }
});

export default store;