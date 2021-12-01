<template>
  <div class="community">
    <div class="community-main">
      <publish class="community__publish"></publish>
      <dynamic class="community__dynamic"></dynamic>
    </div>
    <div class="community-aside">
      <topic></topic>
    </div>
  </div>
</template>

<script>
import publish from './components/publish'
import dynamic from './components/dynamic'
import topic from './components/topic'

  export default {
    name:'community',
    components:{
      publish,
      dynamic,
      topic
    }
  }
</script>

<style lang='scss' scoped>
.community{
  display: flex;
  width: 100%;
  &__publish{
    width: 100%;
  }
  &__dynamic{
    margin-top: 20px;
  }
}
.community-main{
  width: 700px;
  margin-right: auto;
}
.community-aside{
  width: 280px;
}
</style>