<template>
  <div class="dynamic">
    <tabbar class="dynamic__tabbar"></tabbar>
    <card v-for="item in post" :key="item.id" :post='item'></card>
  </div>
</template>

<script>
import tabbar from './tabbar'
import card from '@/components/card'
import { get } from '@/utils/request'

  export default {
    name:'dynamic',
    components:{
      tabbar,
      card,
    },
    data() {
      return {
        post:[]
      }
    },
    methods: {
      getPost(){
        get('/posts',{}).then(res=>{
          this.post = res.data.data
        })
      }
    },
    created () {
      this.getPost()
    }
  }
</script>

<style lang='scss' scoped>
.dynamic{
  width: 100%;
  &__tabbar{
    margin-bottom: 1px;
  }
}
</style>