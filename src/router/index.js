import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/AppHome'
import AppStudent from '../views/AppStudent'

const NotFound = { template: '<p>404 - Not found</p>' }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/student',
    component: AppStudent,
  },
  {
    path: '/student/:id',
    component: AppStudent,
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router