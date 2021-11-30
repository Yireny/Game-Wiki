<template>
  <div class="profile">
    <info class="profile__info" :profile='profile'></info>
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
        profile:{}
      }
    },
    methods: {
      getProfile(){
        get('/profile',{}).then(res=>{
          this.profile=res.data
        })
      }
    },
    created () {
      this.getProfile()
      console.log(this.profile)
    }
  }
</script>

<style lang='scss' scoped>
.profile{
  &__info{
    width: 100%;
  }
}
</style>