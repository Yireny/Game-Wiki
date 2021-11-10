<template>
  <div class="navbar">
    <div class="navbar__inner">
      <div class="navbar__logo"></div>
      <div class="navbar__title" @click="setPath(spe[0])">Arknights·明日方舟</div>
      <div class="navbar__wrap">
        <span
        class="navbar__item"
        :class="{'navbar__item--active': currentID===item.id}"
        @click="setPath(item)"
        v-for="item in navItems"
        :key="item.id"
        >
        {{item.content}}
        </span>
      </div>
      <div class="navbar__login" @click="setPath(spe[1])">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentID:1,
      //导航栏item
      navItems:[
        {
          id:1,
          path:'/home',
          content:'首页'
        },
        {
          id:2,
          path:'/encyclopedia',
          content:'百科'
        },
        {
          id:3,
          path:'/strategy',
          content:'攻略'
        },
        {
          id:4,
          path:'/community',
          content:'社区'
        }
      ],
      //特殊路由跳转
      spe:[
        {
          id:1,
          path:'/home',
          content:'首页'
        },
        {
          id:5,
          path:'/login',
          content:'登录'
        }
      ]
    }
  },
  methods: {
    setPath(item){
      if(this.$route.path!=item.path){
        this.$router.push({
          path:item.path
        })
      }
      if(this.currentID!=item.id){
        this.currentID=item.id
      }
    },
  },
}
</script>

<style lang='scss' scoped>
.navbar {
  width: 100%;
  height: 60px;
  font-size: 0;
  color: rgb(253, 255, 255);
  background-color: rgb(0, 195, 255);
  z-index: 10;
  &__inner{
    position: relative;
    width: 1200px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    display: flex;
  }&__logo{
    width: 90px;
    cursor: pointer;
  }
  &__title{
    position: relative;
    width: 180px;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &::before{
      position: absolute;
      top: 24px;
      left: 0;
      height: 15px;
      border-left: 1px solid rgba(255, 255, 255, .3);
      content: '';
    }
  }
  &__wrap{
    height: 100%;
  }
  &__item{
    display: inline-block;
    width: 68px;
    height: 60px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &--active{
      font-weight: 600px;
      background-color: rgb(46, 206, 255);
    }
    &:hover{
      background-color: rgb(46, 206, 255);
    }
  }
  &__login{
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>