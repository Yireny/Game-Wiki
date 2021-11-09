<template>
  <div class="navbar">
    <div class="navbar__title">Game Wiki</div>
    <div class="navbar__login" @click="login">登录</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    login(){
      this.$router.push({
        path:'/login'
      })
    }
  },
}
</script>

<style lang='scss' scoped>
.navbar {
  background-color: rgb(255, 255, 255);
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  z-index: 10;
  &__title{
    width: 200px;
  }
  &__login{
    width: 100px;
  }
}
</style>