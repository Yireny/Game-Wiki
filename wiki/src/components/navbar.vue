<template>
  <div class="navbar">
    <div class="navbar__title" @click="home">Game Wiki</div>
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
    },
    home(){
      this.$router.push({
        path:'/home'
      })
    }
  },
}
</script>

<style lang='scss' scoped>
.navbar {
  background-color: rgb(15, 161, 206);
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 60px;
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