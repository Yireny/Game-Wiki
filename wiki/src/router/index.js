import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

const home=()=>import('../pages/home/home.vue')
const wiki=()=>import('../pages/wiki/wiki.vue')
const strategy=()=>import('../pages/strategy/strategy.vue')
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
    path:'/strategy',
    component:strategy
  },
  {
    path:'/community',
    component:community
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      isAuthenticated:false
    },
    beforeEnter: (to, from, next) => {
      if (to.name !== 'login' && !Number(store.state.isLogin)) 
      router.push('login')
      else next()
    }
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router