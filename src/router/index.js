import Vue from 'vue'
import  VueRouter from 'vue-router'
import Home from '../views/Home'
import Search from '../views/Search'
import Order from '../views/Order'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes=[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/home'
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router