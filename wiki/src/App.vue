<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar'
// import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components: {
    Navbar,
    // Tabbar
  }
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1080px;
  min-height: 100vh;
  background: linear-gradient(90deg, #BFFEBE, #F6F8B5, #fcd0b3, #bfb6f8, #e8d8b3);
  background-size: 500% 500%;
  animation: gradual 20s ease infinite;
  -webkit-animation: gradual 20s ease infinite;
  background-attachment: fixed;
}
.navbar {
  position: sticky;
  top: 0;
}

.content{
  width: 1080px;
  margin: 5px auto;
  box-sizing: border-box;
}

@keyframes gradual {
  0% {
    background-position: 0% 50%;
  }

  25% {
    background-position: 50% 0%;
  }

  50% {
    background-position: 100% 50%;
  }

  75% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>