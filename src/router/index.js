import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import AdminPlan from '../views/Admin/plan/AdminPlan.vue'
import EditPlanAdmin from '../views/Admin/plan/EditPlanAdmin.vue'
import NewPlanAdmin from '../views/Admin/plan/NewPlanAdmin.vue'
import AdminCustomer from '../views/Admin/customer/AdminCustomer.vue'

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
    path: '/editPlanAdmin/:PlanId',
    name: 'EditPlanAdmin',
    component: EditPlanAdmin
  },
  {
    path: '/newPlanAdmin/',
    name: 'NewPlanAdmin',
    component: NewPlanAdmin
  },
  {
    path: '/adminCustomer/',
    name: 'AdminCustomer',
    component: AdminCustomer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
