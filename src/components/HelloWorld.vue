<template>
  <div class="miniBox" :style="{width:this.width+'px',height:this.height+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    width: Number,
    height: Number,
  },
  data:function(){
    return{
    }
  },
  methods:{
    adjustShow(thisDOM,parentDOM){
      let parentWidth = parentDOM.offsetWidth;
      let parentHeight = parentDOM.offsetHeight;
      let parentScale = parentWidth / parentHeight;
      let w = this.width;
      let h = this.height;
      let scale = w / h;
      if(parentScale>scale){
        let n = parentHeight/h;
        thisDOM.style.transform = 'scale('+n+','+n+')';
        thisDOM.style.left = (parentWidth-w*n)/2 + 'px';
      }else{
        let n = parentWidth/w;
        thisDOM.style.transform = 'scale('+n+','+n+')';
        thisDOM.style.top = (parentHeight-h*n)/2 + 'px';
      }
    }
  },
  mounted(){
    this.adjustShow(this.$el,this.$parent.$el,3);
  }
}
</script>

<style scoped>
.miniBox{
  position: absolute;
  box-sizing: border-box;
  position: relative;
  transform-origin:0 0;
}

</style>
