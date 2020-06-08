import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import categories from "./modules/categories"
import user from "./modules/user"
import recalls from "./modules/recalls"
import works from "./modules/works"

const store = new Vuex.Store({
    modules:{
        categories,
        user,
        recalls,
        works
    }
});

export default store;