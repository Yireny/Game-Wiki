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
    <div class="wiki__main">
      <transition name="fade" mode="out-in">
        <role v-if="wikiIndex===1"></role>
        <enemy v-if="wikiIndex===2"></enemy>
        <material v-if="wikiIndex===3"></material>
        <fashion v-if="wikiIndex===4"></fashion>
        <stage v-if="wikiIndex===5"></stage>
        </transition>
    </div>
  </div>
</template>

<script>
import guide from './components/guide/guide'
import role from './components/role/role'
import enemy from './components/enemy/enemy'
import fashion from './components/fashion/fashion'
import material from './components/material/material'
import stage from './components/stage/stage'

  export default {
    name:'wiki',
    components:{
      guide,
      role,
      enemy,
      fashion,
      material,
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
    width: 100%;
    height: 30px;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 15px;
    border-bottom: 1px solid #ebebeb;
  }
  &__guide{
    margin-bottom: 30px;
  }
  &__main{
    min-height: 600px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba($color: #FFFFFF, $alpha: .7);
  }
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.2s ease;
}
</style>