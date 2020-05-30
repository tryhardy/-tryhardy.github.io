import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import skills from "./modules/skills"
import categories from "./modules/categories"
import user from "./modules/user"

const store = new Vuex.Store({
    modules:{
        skills,
        categories,
        user
    }
});

export default store;