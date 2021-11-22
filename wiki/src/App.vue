<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
      <statement></statement>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Statement from '@/components/statement'
export default {
  name: 'App',
  components: {
    Navbar,
    Statement
  }
}
</script>

<style lang='scss'>
#app {
  position: relative;
  width: 100%;
  min-width: 1200px;
  background: linear-gradient(90deg, #c1ece7, #e9ebb6, #e9cbb7, #d2cbf8, #ebdec1);
  // background-size: 100% 100%;
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
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
  box-sizing: border-box;
}
.footer{
  width: 100%;
  padding: 30px 100px;
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

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease;
}
</style>