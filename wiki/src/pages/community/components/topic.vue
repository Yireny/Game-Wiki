<template>
  <div class="topic">
    <div class="topic__title">最近话题</div>
    <div class="topic__item" v-for="(item,index) in topic">
      {{item}}
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'

  export default {
    name:'topic',
    data() {
      return {
        topic:[]
      }
    },
    methods: {
      getTopic(){
        get('/info',{}).then(res=>{
          this.topic=res.data.data[0].topic
        })
      }
    },
    mounted() {
      this.getTopic()
    },
  }
</script>

<style lang='scss' scoped>
.topic{
  width: 100%;
  background-color: rgba(250, 250, 250, .7);
  border-radius: 10px;
  padding-bottom: 20px;
  &__title{
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    padding: 17px 20px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: .3);
    box-sizing: border-box;
  }
  &__item{
    width: 100%;
    color: #999;
    margin: 10px 0;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    box-sizing: border-box;
  }
}
</style>