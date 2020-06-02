import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import categories from "./modules/categories"
import user from "./modules/user"

const store = new Vuex.Store({
    modules:{
        categories,
        user
    }
});

export default store;