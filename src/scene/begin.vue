<template>
  <div class="page">
    <zoomBox :width="375" :height="600">
      画布
    </zoomBox>
  </div>
</template>

<script>
import zoomBox from '@/src/components/zoomBox.vue';
export default {
  name: 'begin',
  components: {
    zoomBox
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
.page{
  background: #999;
  width:100vw;
  height:100vh;
}
</style>
