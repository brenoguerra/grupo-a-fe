import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateStudent from '../views/AppCreateStudent'
import Home from '../views/AppHome'
import UpdateStudent from '../views/AppUpdateStudent'

const NotFound = { template: '<p>404 - Not found</p>' }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/add',
    component: CreateStudent,
  },
  {
    path: '/edit',
    component: UpdateStudent,
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