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
    <role class="wiki__main" v-if="wikiIndex===1"></role>
    <enemy class="wiki__main" v-if="wikiIndex===2"></enemy>
    <props class="wiki__main" v-if="wikiIndex===3"></props>
    <fashion class="wiki__main" v-if="wikiIndex===4"></fashion>
    <stage class="wiki__main" v-if="wikiIndex===5"></stage>
  </div>
</template>

<script>
import guide from './components/guide/guide'
import role from './components/role/role'
import enemy from './components/enemy/enemy'
import fashion from './components/fashion/fashion'
import props from './components/props/props'
import stage from './components/stage/stage'

  export default {
    name:'wiki',
    components:{
      guide,
      role,
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
    background-color: rgba($color: #FFFFFF, $alpha: .7);
  }
  &__title{
    margin-bottom: 30px;
  }
  &__guide{
    margin-bottom: 30px;
  }
  &__main{
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba($color: #FFFFFF, $alpha: .7);
  }
}
</style>