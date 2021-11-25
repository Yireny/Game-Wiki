<template>
  <div class="community">
    <div class="community-main">
      <publish></publish>
      <dynamic></dynamic>
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

<style scoped>
.community{
  display: flex;
  width: 100%;
}
.community-main{
  width: 700px;
}
.community-aside{
  width: 280px;
}
</style>