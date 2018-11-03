import Vue from 'vue'
import Router from 'vue-router'
import AdminDashboard from '@/components/admin/AdminDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin Dashboard',
      components: {
        AdminDashboard
      }
    }

  ]

})
