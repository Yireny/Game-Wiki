<template>
  <div class="login">
    <div class="login__wrap">
      <div class="login__login"></div>
      <div class="login__register"></div>
    </div>
    <div class="login__btn login__btn--confirm"></div>
    <div class="login__btn login__btn--change"></div>
  </div>
</template>

<script>
  export default {
    name:'Login'
  }
</script>

<style lang='scss' scoped>
.login{
  position: relative;
  &__wrap{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 400px;
    border: 1px solid #333;
  }
  &__btn{
    position: absolute;
    top: 550px;
    left: 50%;
    width: 150px;
    height: 50px;
    border: 1px solid #333;
    &--confirm{
      transform: translateX(-200px);
    }
    &--change{
      transform: translateX(100px);
    }
  }
}
</style>