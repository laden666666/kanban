import Vue from 'vue'
import Router from 'vue-router'
import KanBan from '../page/KanBan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KanBan',
      component: KanBan
    }
  ]
})
