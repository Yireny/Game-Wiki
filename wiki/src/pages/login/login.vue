<template>
  <div class="login">
    <div class="wrap" :style="{'transform':styleObject}">
      <form class="wrap__interface wrap__login" action="">
        <div class="wrap__title">欢迎回来</div>
        <input class="wrap__input" type="text" v-model="account.id" placeholder="ID">
        <input class="wrap__input" type="password" v-model="account.password" placeholder="密码">
        <input class="wrap__btn" type="submit" value="登 录">
      </form>
      <form class="wrap__interface wrap__register" action="">
        <div class="wrap__title">加入我们</div>
        <input class="wrap__input" type="text" v-model="account.name" placeholder="用户名">
        <input class="wrap__input" type="password" v-model="account.password" placeholder="密码">
        <input class="wrap__input" type="password" v-model="account.confirm" placeholder="确认密码">
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
    name:'login',
    data() {
      return {
        deg:0,
        account:{
          name:'',
          id:'',
          account:'',
          password:'',
          confirm:''
        }
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
      },
      register(){
        
      }
    },
  }
</script>

<style lang='scss' scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 70px);
  min-height: 600px;
  perspective: 800px;
}
.wrap{
  position: relative;
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255,.7);
  // transform: rotateY(0deg);
  transition: all 1.5s ease;
  transform-style: preserve-3d;
  &__title{
    height: 60px;
    color: #999;
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
    background-color: rgba($color: #fff, $alpha: .08);
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
    box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .2);
    &:hover{
      box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .5);
    }
    &:focus{
    box-shadow: 0 4px 8px 0 rgba(78, 73, 79, .5);
    }
  }
  &__btn{
    background-color: rgba($color: #00c3ff, $alpha: .5);
    border: none;
    width: 280px;
    font-size: 24px;
    font-weight: 600;
    padding: 6px 0;
    color: white;
    border-radius: 8px;
    margin-top: 15px;
    cursor: pointer;
    &:hover{
      background-color: rgba($color: #00c3ff, $alpha: .7);
    }
  }
}

.switch{
  width: 400px;
  height: 150px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title{
    width: 300px;
    height: 50px;
    color: #999;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  &__btn{
    width: 300px;
    height: 50px;
    background-color: rgba($color: #00c3ff, $alpha: .5);
    border-radius: 15px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    cursor: pointer;
    &:hover{
      background-color: rgba($color: #00c3ff, $alpha: .7);
    }
  }
}

</style>