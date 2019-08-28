<template>
  <div class="page">
    <zoomBox :width="375" :height="600" bgColor="#f3f3f3">
      <fightingBox :combatants="combatants"/>
    </zoomBox>
  </div>
</template>

<script>
import zoomBox from '@/src/components/zoomBox.vue';
import fightingBox from '@/src/components/fightingBox.vue';
import levelConf from '@/level.conf.js';
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
  data:function(){
    return{
      my:{
        type:'blue',
        follower:[1,1,1] //表示有3个1级的弟子
      },
      enemy:{
        type:'red',
        follower:[3,1] //表示有1个3级的、一个1级的
      },
      combatants:null, //参与战斗的人员配置
    }
  },
  methods:{
    getPeopleConfig(myFollower,enemyFollower){
      let obj = {
        blue:[],
        red:[],
      };
      for(let i=0;i<myFollower.length;i++){
        let one = JSON.parse(JSON.stringify(levelConf[myFollower[i]-1]));
        one.id = i+1;
        one.type = 'blue';
        obj.blue.push(one);
      }
      for(let i=0;i<enemyFollower.length;i++){
        let one = JSON.parse(JSON.stringify(levelConf[enemyFollower[i]-1]));
        one.id = i+1;
        one.type = 'red';
        obj.red.push(one);
      }
      return obj;
    }
  },
  mounted(){
    this.combatants = this.getPeopleConfig(this.my.follower,this.enemy.follower);
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
