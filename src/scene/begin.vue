<template>
  <div class="page">
    <zoomBox :width="375" :height="600" bgColor="#f3f3f3">
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
  width:100%;
  height:100%;
}
</style>
