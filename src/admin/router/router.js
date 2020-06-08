import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import about from '../pages/skills-section.vue'
import works from '../pages/works-section.vue'
import recall from '../pages/recalls-section.vue'
import login from '../pages/login.vue'
import store from '../../store'
import axios from 'axios';


const guard = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/'
})


const routes = [
    { path: '/', component: about },
    { path: '/works', component:  works },
    { path: '/recall', component: recall },
    { 
        path: '/login', 
        component: login, 
        meta: { 
            needAuth:true,
            public:true
        } }
]

const router = new VueRouter({ 
    //mode:'history',
    routes
})

router.beforeEach(async (to, from, next)=> {
    const isPublicRoute = to.matched.some(router => router.meta.public);
    const isUserLoggedIn = store.getters['user/userIsLogged'];

    if (!isPublicRoute && !isUserLoggedIn) {
        const token = localStorage.getItem('token');
        guard.defaults.headers['Authorization'] = `Bearer ${token}`;
    
        try {
            const {data} = await guard.get('/user');
            store.commit('user/SET_USER', data.user);
            next();
        } catch (error){
            if(error.response.status !== 401) {
                router.replace('/login');
                localStorage.clear();
            } else {
                // const { data } = await guard.post('/refreshToken');
                // const token = data.token;
                // localStorage.setItem('token', token);
                // guard.defaults.headers['Authorization'] = `Bearer ${token}`;
                // const response = await guard.get('/user');
                // store.commit('user/SET_USER', response.data.user);
                next();
            }
        }

    } else {
        next();
    }
})


export default router