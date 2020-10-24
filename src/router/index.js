import Vue from 'vue'
import  VueRouter from 'vue-router'
import Index from '../views/Index'
import Search from '../views/Search'
import Order from '../views/Order'
import Profile from '../views/Profile'
import myFoot from '../components/myFoot'

Vue.use(VueRouter)

const routes=[
  {
    path:'/foot',
    component:myFoot
  },
  {
    path:'/index',
    component:Index
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
    redirect:'/index'
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router