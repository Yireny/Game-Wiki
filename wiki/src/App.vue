<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <div class="app__wrap">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="app__footer">
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
  },
  mounted() {
    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))=='true'?true:false
    let navID = JSON.parse(sessionStorage.getItem('navID'))?JSON.parse(sessionStorage.getItem('navID')):1
    console.log(isLogin)
    console.log(navID)
    // this.$store.mutations.setLogin(this.$store.state,)
  },
  beforeDestroy() {
    sessionStorage.setItem('isLogin',this.$store.getters.isLogin())
    sessionStorage.setItem('navID',this.$store.getters.navID())
  },
}
</script>

<style lang='scss'>
#app {
  position: relative;
  width: 100%;
  min-width: 1200px;
  min-height: 100vh;
  padding-bottom: 10px;
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

.app__wrap{
  width: 1000px;
  min-height: 500px;
  margin: 0 auto;
  padding-top: 10px;
  box-sizing: border-box;
}

.app__footer{
  width: 1000px;
  margin: 0 auto;
  margin-top: 10px;
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