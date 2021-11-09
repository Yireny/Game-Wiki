import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../pages/home/home.vue')
const Login=()=>import('../pages/login/login.vue')
const Profile=()=>import('../pages/profile/profile.vue')
const Data=()=>import('../pages/data/data.vue')
const Community=()=>import('../pages/community/community.vue')

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
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/community',
    component:Community
  },
  {
    path:'/data',
    component:Data
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router