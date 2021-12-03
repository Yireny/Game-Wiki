<template>
  <div class="wiki">
    <div class="wiki__header">
      <div class="wiki__title">快捷导航</div>
      <guide
      class="wiki__guide"
      @test='test'
      :wikiIndex='wikiIndex'
      >
      </guide>
    </div>
    <role-map class="wiki__main" v-if="wikiIndex===1"></role-map>
    <enemy v-if="wikiIndex===2"></enemy>
    <props v-if="wikiIndex===3"></props>
    <fashion v-if="wikiIndex===4"></fashion>
    <stage v-if="wikiIndex===5"></stage>
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
        wikiIndex:1,
      }
    },
    methods: {
      test(index){
        this.wikiIndex=index
        console.log(index)
      }
    }
  }
</script>

<style lang='scss' scoped>
.wiki{
  width: 100%;
  &__header{
    border-radius: 10px;
    padding: 20px;
    background-color: rgba(250, 250, 250,.7);
  }
  &__title{
    margin-bottom: 30px;
  }
  &__guide{
    margin-bottom: 30px;
  }
  &__main{
    margin-top: 20px;
    padding: 0 auto;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba(250, 250, 250,.7);
  }
}
</style>