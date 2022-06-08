import {  createRouter , createWebHistory } from 'vue-router';
import store from '../store/index.js'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',component:()=>import('../pages/Home.vue')
        },
        {
            path:'/home',component:()=>import('../pages/Home.vue')
        },
        {
            path:'/contact',component:()=>import('../pages/Contact.vue')
            ,meta:{ requiresAuth : true}
        },
        {
            path:'/signinup',component:()=>import('../pages/Signinup.vue')
        },
        {
            path:'/trading',component:()=>import('../pages/Trading.vue')
            ,meta:{ requiresAuth : true}
        },
        {
            path:'/calculating',component:()=>import('../pages/Calculating.vue')
            ,meta:{ requiresAuth : true}
        },
    ]
});

router.beforeEach(function(to,_,next){
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/signinup');
    }
    else{
        next()
    }
})

export default router;