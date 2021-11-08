import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../pages/home/home.vue')
const Login=()=>import('../pages/login/login.vue')

Vue.use(VueRouter)

const routes=[
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/login',
    component:Login
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router