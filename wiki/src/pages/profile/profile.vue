<template>
  <div class="main">
    <div class="personal">
      <div class="personal__frame">
        <img src="../../assets/images/头像_早露_skin1.png" alt="">
      </div>
      <div class="personal__information">
        <div class="persional__name"></div>
      </div>
    </div>
    <div class="record">

    </div>
  </div>
</template>

<script>
  export default {
    name:'Profile'
  }
</script>

<style lang='scss' scoped>
.main{
  height: 2000px;
  border-radius: 10px;
}
.personal{
  width: 100%;
  display: flex;
  background-color:rgba(255, 255, 255, .7);
  border-radius: 10px;
  &__frame{
    width: 200px;
    height: 200px;
    margin: 30px 0 50px 40px;
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

.record{
  width: 100%;
  height: 600px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: 10px;
}
</style>