<template>
  <div v-if="user" class="profile">
    <info class="profile__info" :userMsg='user'></info>
    <record class="profile__record"></record>
  </div>
</template>

<script>
import info from './components/info'
import record from './components/record'
import { get } from '@/utils/request'

  export default {
    name:'profile',
    components: {
      info,
      record
    },
    data () {
      return {
        user:{}
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
      // console.log(this.user)
    },
  }
</script>

<style lang='scss' scoped>
.profile{
  &__info{
    width: 100%;
  }
}
</style>