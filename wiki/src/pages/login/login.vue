<template>
  <div class="login">
    <div class="wrap" :style="{'transform':styleObject}">
      <form class="wrap__interface wrap__login">
        <div class="wrap__title">欢迎回来</div>
        <input class="wrap__input" type="text" placeholder="用户名">
        <input class="wrap__input" type="password" placeholder="密码">
        <input class="wrap__btn" type="submit" value="登 录">
      </form>
      <form class="wrap__interface wrap__register">
        <div class="wrap__title">加入我们</div>
        <input class="wrap__input" type="text" placeholder="用户名">
        <input class="wrap__input" type="password" placeholder="密码">
        <input class="wrap__input" type="password" placeholder="确认密码">
        <input class="wrap__btn" type="submit" value="注 册">
      </form>
    </div>
    <div class="switch">
      <div class="switch__title">没有/已有账号？</div>
      <div class="switch__btn" @click="change">切换</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Login',
    data() {
      return {
        deg:0,
        isRegister:true
      }
    },
    computed: {
      styleObject:function(){
        return 'rotateY('+this.deg+'deg)'
      }
    },
    methods: {
      change(){
        if(this.deg==0){
          this.deg+=180
        }else{
          this.deg-=180
        }
      }
    },
  }
</script>

<style lang='scss' scoped>
.login{
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  background: linear-gradient(90deg, #BFFEBE, #F6F8B5, #fcd0b3, #bfb6f8, #e8d8b3);
  background-size: 500% 500%;
  animation: gradual 20s ease infinite;
  -webkit-animation: gradual 20s ease infinite;
  perspective: 800px;
}
.wrap{
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -200px;
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: rgb(252, 252, 249);
  // transform: rotateY(0deg);
  transition: all 1.5s ease;
  transform-style: preserve-3d;
  &__title{
    height: 60px;
    // text-align: center;
    font-size: 25px;
    font-weight: 600;
  }
  &__interface{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__register{
    transform: rotateY(180deg);
  }
  &__input{
    background-color: #4E495D;
    width: 70%;
    height: 48px;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 0 16px;
    font-size: 18px;
    color: #c4c3ca;
    font-weight: 500;
    outline: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .5);
  }
  &__btn{
    background-color: #981E61;
    border: none;
    width: 280px;
    font-size: 24px;
    font-weight: 600;
    padding: 6px 0;
    color: white;
    border-radius: 8px;
    margin-top: 15px;
    cursor: pointer;
  }
}

.switch{
  position: absolute;
  top: 600px;
  left: 50%;
  width: 400px;
  height: 150px;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: rgb(252, 252, 249);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title{
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  &__btn{
    width: 300px;
    height: 50px;
    background-color: rgb(250, 174, 204);
    border-radius: 15px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 255, 255);
  }
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