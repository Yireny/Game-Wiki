import Vue from 'vue'
import VueRouter from 'vue-router'

const home=()=>import('../pages/home/home.vue')
const wiki=()=>import('../pages/wiki/wiki.vue')
const guide=()=>import('../pages/guide/guide.vue')
const community=()=>import('../pages/community/community.vue')
const login=()=>import('../pages/login/login.vue')
const profile=()=>import('../pages/profile/profile.vue')

Vue.use(VueRouter)

const routes=[
  {
    path:'',
    name:'home',
    redirect: '/home',
    meta:{
      title:'首页'
    }
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/wiki',
    component:wiki
  },
  {
    path:'/guide',
    component:guide
  },
  {
    path:'/community',
    component:community
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/profile',
    component:profile,
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router