<template>
  <div class="bg10">
    游戏开场
    <div class="xxx">测试</div>
  </div>
</template>

<script>
export default {
  name: 'begin',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
.bg10{
  .xxx{
    border:solid 1px red;
    color:red;
    text-align: center;
    transform:scale(2,3);
    margin-top:10vh;
  }
}
</style>
