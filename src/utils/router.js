import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: () =>import('../components/index/index') },
        { path: '/cate', component: () =>import('../components/index/cate') }
    ]
})

export default router