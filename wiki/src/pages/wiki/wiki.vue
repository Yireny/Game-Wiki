<template>
  <div class="wiki">
    <div class="wiki__title">快捷导航</div>
    <guide
    class="wiki__guide"
    :guide='guide'
    >
    </guide>
    <role-map v-if="currentIndex==1"></role-map>
    <enemy v-if="currentIndex==2"></enemy>
    <props v-if="currentIndex==3"></props>
    <fashion v-if="currentIndex==4"></fashion>
    <stage v-if="currentIndex==5"></stage>
  </div>
</template>

<script>
import guide from './components/guide/guide'
import roleMap from './components/role/roleMap'
import enemy from './components/enemy/enemy'
import fashion from './components/fashion/fashion'
import props from './components/props/props'
import stage from './components/stage/stage'

  export default {
    name:'wiki',
    components:{
      guide,
      roleMap,
      enemy,
      fashion,
      props,
      stage
    },
    data () {
      return {
        currentIndex:1,
        guide:[
          {
            index:0,
            title:'干员'
          },
          {
            index:1,
            title:'敌人'
          },
          {
            index:2,
            title:'道具'
          },
          {
            index:3,
            title:'时装'
          },
          {
            index:4,
            title:'关卡'
          }
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
.wiki{
  width: 100%;
  padding: 20px;
  background-color: rgba(250, 250, 250,.7);
  border-radius: 10px;
  box-sizing: border-box;
  &__title{
    margin-bottom: 30px;
  }
  &__guide{
    margin-bottom: 30px;
  }
}
</style>