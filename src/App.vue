<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}

//375*812 iphone
//375*600 游戏区域设定
</script>

<style>
#app {
  width:100vw;
  height:100vh;
  background: #f3f3f3;
  margin:0 auto;
  font-size: 1.6em;
  overflow: hidden;
}
</style>
