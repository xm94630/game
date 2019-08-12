<template>
  <div class="box">
    <HelloWord :width="100" :height="200"/>
  </div>
</template>

<script>
import HelloWord from '@/src/components/HelloWorld.vue';
export default {
  name: 'begin',
  components: {
    HelloWord
  },
  props: {
    msg: String,
    width: Number,
    height: Number,
  },
  mounted(){
  }
}
</script>


<style scoped lang="scss">
.box{
  background: #999;
  width:300px;
  height:400px;
  position:absolute;
  top:50px;
  left:100px;
}
</style>
