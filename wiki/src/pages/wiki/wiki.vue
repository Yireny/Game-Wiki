<template>
  <div class="wiki">
    <div class="wiki__title">快捷导航</div>
    <guide class="wiki__guide"></guide>
    <role-map v-if="true"></role-map>
  </div>
</template>

<script>
import guide from './components/guide/guide'
import roleMap from './components/role/roleMap'

  export default {
    name:'wiki',
    components:{
      guide,
      roleMap
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