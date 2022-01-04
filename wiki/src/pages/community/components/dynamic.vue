<template>
  <div class="dynamic">
    <tabbar class="dynamic__tabbar"></tabbar>
    <card
    v-for="item in post"
    v-show="!isShow"
    :key="item.id"
    :post='item'
    @click.native="showPost(item.id)"
    ></card>
    <post
    v-show="isShow"
    :postDetail='postDetail'
    :showPost='showPost'
    ></post>
  </div>
</template>

<script>
import tabbar from './tabbar'
import card from '@/components/card'
import post from '@/components/post'
import { get } from '@/utils/request'

  export default {
    name:'dynamic',
    components:{
      tabbar,
      card,
      post
    },
    data() {
      return {
        post:[],
        postDetail:[],
        isShow:false
      }
    },
    methods: {
      getPost(){
        get('/posts',{}).then(res=>{
          this.post = res.data.data
        })
      },
      showPost(id){
        this.isShow = !this.isShow
        if(this.isShow){
          this.postDetail = this.post.filter(item=>item.id == id)
        }
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