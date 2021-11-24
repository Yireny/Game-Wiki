<template>
  <div class="wiki">
    <div class="guide">
      <div class="guide__title">
        <span class="iconfont guide__title-icon">&#xe692;</span>
        <span>快捷导航</span>
      </div>
      <div class="guide__list">
        <guide-item v-for="item in 4"></guide-item>
      </div>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
import guideItem from './components/guideItem'

  export default {
    name:'wiki',
    components:{
      guideItem
    }
  }
</script>

<style lang='scss' scoped>
.wiki{
  width: 100%;
  padding-top: 20px;
  background-color: rgba(250, 250, 250,.7);
  border-radius: 10px;
}
.guide{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  padding: 0 20px;
  &__title{
    font-size: 16px;
    font-weight: 600;
    &-icon{
      width: 28px;
      height: 28px;
      font-weight: normal;
    }
  }
  &__list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-evenly;
  }
}
.content{
  width: 100%;
  height: 500px;
}
</style>