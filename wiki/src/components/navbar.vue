<template>
  <div class="navbar">
    <div class="navbar__inner">
      <div class="navbar__logo" @click="setPath(navItemsAside[0])">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div class="navbar__title" @click="setPath(navItemsAside[0])">Arknights·明日方舟</div>
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
      <div class="navbar__aside">
        <div class="navbar__item">消息</div>
        <div class="navbar__login" :class="{'navbar__login--active': currentID===5}" @click="setPath(navItemsAside[1])">
          <div class="navbar__frame">
            <img src="../assets/images/头像_早露_skin1.png" alt="">
          </div>
        </div>
      </div>
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
      //两侧路由跳转
      navItemsAside:[
        {
          id:1,
          path:'/home',
          content:'首页'
        },
        {
          id:5,
          path:'/profile',
          content:'用户'
        },
        {
          id:6,
          path:'/community',
          content:'消息'
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
  }
  &__logo{
    width: 90px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 15px;
    & img{
      width: 76px;
      vertical-align: middle;
    }
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
  &__aside{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    cursor: pointer;
  }
  &__login{
    width: 76px;
    height: 60px;
    padding: 12px 20px;
    box-sizing: border-box;
    &--active{
      font-weight: 600px;
      background-color: rgb(46, 206, 255);
    }
    &:hover{
      background-color: rgb(46, 206, 255);
    }
  }
  &__frame{
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-color: #fff;
    & img{
      width: 100%;
      height: 100%;
      vertical-align: top;
      border-radius: 100%;
    }
  }
}
</style>