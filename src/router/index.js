import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import AdminPlan from '../views/Admin/AdminPlan.vue'
import EditPlanAdmin from '../views/Admin/EditPlanAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/adminPlan',
    name: 'AdminPlan',
    component: AdminPlan
  },
  {
    path: '/editPlanAdmin/:id',
    name: 'EditPlanAdmin',
    component: EditPlanAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
