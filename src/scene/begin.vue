<template>
  <div class="page">
    <zoomBox :width="375" :height="600" bgColor="#f3f3f3">
      <fightingBox />
    </zoomBox>
  </div>
</template>

<script>
import zoomBox from '@/src/components/zoomBox.vue';
import fightingBox from '@/src/components/fightingBox.vue';
export default {
  name: 'begin',
  components: {
    zoomBox,
    fightingBox,
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
