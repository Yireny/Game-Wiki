<template>
  <div class="encyclopedia">
    <div class="navigation">
      <div class="navigation__title">快速导航</div>
      <div class="navigation__list">
        <div class="navigation__item"></div>
      </div>
    </div>
    <div class="cha">角色</div>
  </div>
</template>

<script>
  export default {
    name:'Encyclopedia'
  }
</script>

<style lang='scss' scoped>
.encyclopedia{
  height: 1000px;
  padding-top: 20px;
  background-color: rgba(250, 250, 250,.7);
  border-radius: 10px;
}
.navigation{
  height: 300px;
  &__list{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    background-color: antiquewhite;
  }
  &__item{
    width: 200px;
    height: 200px;
  }
}
.cha{
  height: 300px;
}
</style>