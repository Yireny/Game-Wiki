<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <div class="main">
      <tabbar class="main__tabbar"></tabbar>
      <router-view class="main__content"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Tabbar from './components/tabbar'

export default {
  name: 'App',
  components: {
    Navbar,
    Tabbar
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
}

.navbar {
  position: sticky;
  top: 0;
}

.main {
  display: flex;
  &__tabbar {
    position: sticky;
    top: 50px;
    width: 250px;
    height: calc(100vh - 50px);
  }
  &__content {
    flex: 1;
  }
}
</style>
