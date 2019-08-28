<template>
  <div class="hpBar">
    <div class="hpBarBar" :style="style"></div>
    <div class="hpBarBarBar" :style="style2"></div>
  </div>
</template>

<script>
export default {
  name: 'hpBar',
  props: {
    hp:Number,
    background:String,
  },
  data:function(){
    return{
      maxHp:this.hp,
    }
  },
  computed:{
    style:function(){
      return {
        width:this.hp/this.maxHp*100+"%",
        background: this.background,
      };
    },
    style2:function(){
      return {
        width:this.hp/this.maxHp*100+"%",
        background: '#ffff80',
      };
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
.hpBar{
  position: relative;
  z-index: 1000;
  font-size: 12px;
  width:20px;
  height:4px;
  background:rgba(0, 0, 0, 0.8);
  overflow: hidden;
  .hpBarBar{
    position: absolute;
    z-index: 1002;
    height:100%;
    transition:width 0.2s ease-in;
  }
  .hpBarBarBar{
    opacity:0.95;
    z-index: 1001;
    position: absolute;
    top:0px;
    height:100%;
    transition:width 0.5s ease-in;
  }
}
</style>
