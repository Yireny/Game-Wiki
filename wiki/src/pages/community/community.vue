<template>
  <div class="community">
    <div class="community__main">
      <publish></publish>
      <dynamic></dynamic>
    </div>
    <div class="aside">
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
.community__main{
  width: 700px;
}
.aside{
  width: 280px;
}
</style>