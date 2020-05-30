import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import about from '../pages/skills-section.vue'
import works from '../pages/works-section.vue'
import recall from '../pages/recalls-section.vue'
import login from '../pages/login.vue'


const routes = [
    { path: '/', component: about },
    { path: '/works', component:  works },
    { path: '/recall', component: recall },
    { path: '/login', component: login, meta: { needAuth:true } }
]

const router = new VueRouter({ 
    //mode:'history',
    routes
})

export default router