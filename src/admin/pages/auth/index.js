import Vue from 'vue';
import App from './Auth.vue'

Vue.use(SimpleVueValidation);

new Vue({
  el: "#auth",
  render: h => h(App)
});