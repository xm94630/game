<template>
  <div class="miniBox">
    123
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    width: Number,
    height: Number,
  },
  methods:{
    adjustShow(thisDOM,parentDOM,type){

      let show_width = parentDOM.offsetWidth;
      let show_height = parentDOM.offsetHeight;
      let w = this.width;
      let h = this.height;


      const scaleW = show_width / w;
      const scaleH = show_height / h;
      if(type===1){
        thisDOM.style.transform = 'scale('+scaleW+','+scaleH+')';
        thisDOM.style.top = (show_height - h)/2 + "px";
        if(show_width<w){
          thisDOM.style.left = (show_width - w)/2 + "px";
        }
      }else if(type===2){
        thisDOM.style.transform = 'scale('+scaleW+','+scaleW+')';
        thisDOM.style.top = (h*scaleW - h)/2 + "px";
        if(show_width<w){
          thisDOM.style.left = (show_width - w)/2 + "px";
        }
      }else if(type===3){
        thisDOM.style.transform = 'scale('+scaleH+','+scaleH+')';
        thisDOM.style.top = (show_height - h)/2 + "px";
        if(show_width<w){
          thisDOM.style.left = (show_width - w)/2 + "px";
        }
      }
    },
  },
  mounted(){
    this.adjustShow(this.$el,this.$parent.$el,3);
  }
}
</script>


<style scoped>
.miniBox{
  width: 100px;
  height:200px;
  background: #666;
  color:red;
  position: relative;
}
</style>
