import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import AdminPlan from '../views/Admin/plan/AdminPlan.vue'
import EditPlanAdmin from '../views/Admin/plan/EditPlanAdmin.vue'
import NewPlanAdmin from '../views/Admin/plan/NewPlanAdmin.vue'
import AdminCustomer from '../views/Admin/customer/AdminCustomer.vue'
import EditCustomerAdmin from '../views/Admin/customer/EditCustomerAdmin.vue'
import NewCustomerAdmin from '../views/Admin/customer/NewCustomerAdmin.vue'
import AdminContract from '../views/Admin/contract/AdminContract.vue'
import EditContractAdmin from '../views/Admin/contract/EditContractAdmin.vue'

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
  },
  {
    path: '/editCustomerAdmin/:CustomerId',
    name: 'EditCustomerAdmin',
    component: EditCustomerAdmin
  },
  {
    path: '/newCustomerAdmin/',
    name: 'NewCustomerAdmin',
    component: NewCustomerAdmin
  },
  {
    path: '/adminContract/',
    name: 'AdminContract',
    component: AdminContract
  },
  {
    path: '/editContractAdmin/:ContractId',
    name: 'EditContractAdmin',
    component: EditContractAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
