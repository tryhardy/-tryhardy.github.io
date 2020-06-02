import Vue from 'vue';
import App from './App.vue'
import babelPolyfill from 'babel-polyfill'
import store from '../store'
import router from './router/router'
import $axios from './requests'

if (process.env.NODE_ENV === "development") {
   require("file-loader!./index.pug");
}

store.$axios = $axios;

new Vue({
  el: "#app-root",
  store,
  router,
  render: h => h(App)
});