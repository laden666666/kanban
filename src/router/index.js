import Vue from 'vue'
import Router from 'vue-router'
import KanBan from '../page/KanBan.vue'
import Main from '../page/Main.vue'
import Default from '../page/Main/Default.vue'
import Login from '../page/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/main/',
            name: 'main',
            component: Main,
            children: [
                {
                    path: 'default',
                    component: Default
                },
            ]
        },{
            path: '/Login',
            name: 'Login',
            component: Login
        }
    ]
})
