<template>
  <div class="user-msg">
    <div class="user-msg__avatar">
      <img :src="user.avatar" alt="">
      <div class="avatar__wrap">

      </div>
      <div class="user-msg__btn-ava">更换头像</div>
    </div>
    <div class="user-msg__aside"></div>
  </div>
</template>

<script>
  export default {
    name:'userMsg',
    data() {
      return {
        user:{}
      }
    },
    mounted() {
      this.user = this.$store.getters.getUser
      // console.log(this.user)
    },
  }
</script>

<style lang='scss' scoped>
.user-msg{
  display: flex;
  width: 100%;
  height: calc( 100vh - 400px);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-sizing: border-box;
  &__avatar{
    position: relative;
    width: 200px;
    & img{
      width: 100%;
      height: auto;
      border-radius: 50%;
      background-color: #fff;
    }
    .avatar__wrap{
      position: absolute;

    }
  }
}
</style>