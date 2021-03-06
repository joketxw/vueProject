import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);
const state = {
    user:'',//用户信息
    home: {                //首页数据

    },
    personal:{    //个人中心的信息数据

    },
    goodsDetail:{//商品详情的信息数据

    },
    address:{

    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
