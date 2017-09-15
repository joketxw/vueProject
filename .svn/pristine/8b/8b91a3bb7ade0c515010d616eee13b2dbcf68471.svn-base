// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'
import store from './store'
import FastClick from 'fastclick'
import Mint from 'mint-ui'

Vue.prototype.$http = axios;
Vue.use(vuex,Mint);

import 'mint-ui/lib/style.css';
Vue.config.productionTip = false;

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
    render: h => h(App)
})
