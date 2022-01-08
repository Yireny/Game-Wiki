<template>
  <div v-if="user" class="profile">
    <info class="profile__info" :userMsg='user'></info>
    <div
    class="profile__none"
    v-show="!showMsg"
    >欢迎来到你的个人中心</div>
    <user-msg
    v-show="showMsg"
    ></user-msg>
  </div>
</template>

<script>
import info from './components/info'
import userMsg from './components/userMsg'
import { get } from '@/utils/request'

  export default {
    name:'profile',
    components: {
      info,
      userMsg
    },
    data () {
      return {
        user:{},
        showMsg:false
      }
    },
    methods: {
      getProfile(){
        // get('/profile',{}).then(res=>{
        //   this.profile=res.data.data
        // })
      }
    },
    created () {
      this.getProfile()
    },
    mounted() {
      this.user = this.$store.getters.getUser
    },
  }
</script>

<style lang='scss' scoped>
.profile{
  &__info{
    width: 100%;
    margin-bottom: 20px;
  }
  &__none{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc( 100vh - 400px);
    font-size: 30px;
    // font-weight: bold;
    color: #ccc;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
  }
}
</style>