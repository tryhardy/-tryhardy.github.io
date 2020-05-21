import Vue from 'vue';
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  render: h => h(App)
});