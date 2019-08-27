<template>
  <div class="">
    <div class="blueBox">
      <template v-for="one in players.blue">
        <div :key="one.id" class="xxx">
          <div class="people"></div>
          <hpBar :hp="one.hp" background="#60c016" />
        </div>
      </template>
    </div>
    <div class="redBox">
      <template v-for="one in players.red">
        <div :key="one.id" class="xxx">
          <div class="people"></div>
          <hpBar :hp="one.hp" background="#fd3633" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import hpBar from '@/src/components/hpBar.vue';
import { setTimeout } from 'timers';

export default {
  name: 'fightingBox',
  components: {
    hpBar,
  },
  props: {
  },
  data:function(){
    return{
      players:{
        'blue':[
          {
            id:1,
            lv:1,
            hp:100,
            eva:0.05,
            atk:5,
            atk_add:5,
            type:'blue',
          },
          {
            id:2,
            lv:1,
            hp:100,
            eva:0.05,
            atk:5,
            atk_add:5,
            type:'blue',
          },
          {
            id:3,
            lv:1,
            hp:100,
            eva:0.05,
            atk:5,
            atk_add:5,
            type:'blue',
          },
        ],
        'red':[
          {
            id:4,
            lv:2,
            hp:120,
            eva:0.1,
            atk:8,
            atk_add:5,
            type:'red',
          },
          {
            id:5,
            lv:1,
            hp:100,
            eva:0.05,
            atk:5,
            atk_add:5,
            type:'red',
          },
        ]
      }
    }
  },
  methods:{
  },
  mounted(){
    setTimeout(()=>{
      this.players.blue[0].hp=95;
      this.players.red[0].hp=60;
    },1000)
  }
}
</script>

<style scoped lang="scss">
.xxx{
  display: inline-block;
  width:20px;
  height:20px;
  margin-right: 25px;
  position: relative;
}
.blueBox{
  .people{
    background: #ccc;
    width:20px;
    height:20px;
  }
}
.redBox{
  .people{
    background: #ccc;
    width:20px;
    height:20px;
  }
}
</style>
