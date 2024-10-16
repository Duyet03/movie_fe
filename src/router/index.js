import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/dat-ve',
        component: ()=>import('../components/DatVe/index.vue')
    },
    {
        path : '/dat-cho',
        component: ()=>import('../components/DatCho/index.vue')
    },
    {
        path : '/thanh-toan',
        component: ()=>import('../components/ThanhToan/index.vue')
    },
    {
        path : '/hello',
        component: ()=>import('../components/hello/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router