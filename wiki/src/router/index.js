import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../pages/home/home.vue')
const Encyclopedia=()=>import('../pages/encyclopedia/encyclopedia.vue')
const Strategy=()=>import('../pages/strategy/strategy.vue')
const Community=()=>import('../pages/community/community.vue')
const Login=()=>import('../pages/login/login.vue')
const Profile=()=>import('../pages/profile/profile.vue')

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
    path:'/encyclopedia',
    component:Encyclopedia
  },
  {
    path:'/strategy',
    component:Strategy
  },
  {
    path:'/community',
    component:Community
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router