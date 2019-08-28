<template>
  <div class="" v-if="players">
    <div class="blueBox">
      <template v-for="one in players.blue">
        <div :key="one.id" class="xxx" v-show="one.alive">
          <div class="people">{{one.lv}}</div>
          <hpBar class="hpBarStyle" :hp="one.hp" background="#60c016" />
        </div>
      </template>
    </div>
    <div class="redBox">
      <template v-for="one in players.red">
        <div :key="one.id" class="xxx" v-show="one.alive">
          <div class="people">{{one.lv}}</div>
          <hpBar class="hpBarStyle" :hp="one.hp" background="#fd3633" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import hpBar from '@/src/components/hpBar.vue';
import { setTimeout } from 'timers';
import { Promise } from 'q';

// players 参数配置
// players:{
//   'blue':[{
//     id:1,
//     lv:1,
//     hp:100,
//     eva:0.05,
//     atk:5,
//     atk_add:5,
//     cri:0.1,
//     type:'blue',
//     alive:true,
//   }],
//   'red':[{
//     id:4,
//     lv:2,
//     hp:120,
//     eva:0.1,
//     atk:10,
//     atk_add:10,
//     cri:0.55,
//     type:'red',
//     alive:true,
//   }]
// }


export default {
  name: 'fightingBox',
  components: {
    hpBar,
  },
  props: {
    combatants:Object
  },
  data:function(){
    return{
      players:JSON.parse(JSON.stringify(this.combatants)),
      finish:false,
    }
  },
  watch:{
    "combatants":function(v){
      this.players = JSON.parse(JSON.stringify(v));
      this.fighting();
    }
  },
  methods:{
    //随机获取[a,b]中一个值
    getRandomValue(b){
      return Math.round(Math.random() * b);
    },
    //随机获取[a,b]中一个值
    getRandomValueFromRange(a,b){
      return Math.round(Math.random() * (b - a)) + a;
    },
    //洗牌
    shuffle(arr){
      for (let i = 0; i < arr.length; i++) {
        const randomIndex = this.getRandomValueFromRange(arr.length - 1,i);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
      }
      return arr;
    },

    //获得（暴击率、躲闪率等）标记
    getTag(rate){
      return Math.random()<rate;
    },

    // 一个人攻击一次
    oneAttack(people){
      let promise = new Promise((resolve)=>{
        //这里还是有必要判断下当前的角色是否还存活，因为一个回合前都是活的，但是战斗之后可能有阵亡的，阵亡的就不能再打了。
        if(people.alive){
          setTimeout(()=>{
            if(people.type=="blue"){
              let blueOne = people;
              //从存活的对手中挑出一个作为攻击目标
              let alive =this.players.red.filter((one)=>{
                return one.alive == true;
              })
              let redOne = alive[this.getRandomValue(alive.length-1)];
              this.yyy(blueOne,redOne);
            }else{
              let redOne = people;
              //从存活的对手中挑出一个作为攻击目标
              let alive =this.players.blue.filter((one)=>{
                return one.alive == true;
              })
              let blueOne = alive[this.getRandomValue(alive.length-1)];
              this.yyy(redOne,blueOne);
            }
            resolve('ok1')
          },150)
        }else{
          resolve('ok2')
        }
      })
      return promise;
    },
    
    //具体的战斗逻辑
    yyy(Attacker, Defender){
      console.log(Attacker.type+' 方发起攻击！')
      if(this.getTag(Defender.eva)){
        console.log('miss');
      }else{
        let atk = this.getRandomValueFromRange(Attacker.atk[0],Attacker.atk[1]);
        if(this.getTag(Attacker.cri)){
          atk = atk*2;
          console.log('暴击');
        }
        Defender.hp -= atk;
        if(Defender.hp<=0){
          Defender.alive = false;
          
          //用来判断战斗是否结束
          let alive =this.players[Defender.type].filter((one)=>{return one.alive == true;})
          if(alive.length===0){this.finish = true;}
        }
      }
    },


    //一个回合的战斗算法
    //1）将红绿2队数组混合（只过滤得到存活的），并随机排成一个队列
    //2) 按队列顺序依次完成攻击。
    //3) 首先判断队列中成员是否存活，只有存活的情况下，才会分配敌方的一个对手进行攻击。
    //4) 对阵亡的人员进行标记，以后不会再参加战斗。
    //每局，包含5个战斗回合。一局结束之后，会询问是否继续战斗，或者撤退。

    //战斗的入口
    async fighting(){

      //一局
      for(let j=0;j<30;j++){

        //注意concat是浅拷贝。依然保持原对象的引用
        let list = this.players.blue.concat(this.players.red);
        let newList = this.shuffle(list)
        //过滤存活的
        newList = newList.filter((one)=>{return one.alive == true;})
        //一个回合
        for(let i=0;i<newList.length;i++){
          //处理一个异步的事情
          if(!this.finish){
            await this.oneAttack(newList[i]);
          }
        }
      }

      console.log('结束');      
    }
  },
  mounted(){
    if(this.players){
      this.fighting();
    }
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

.hpBarStyle{
  position: absolute;
  top:0px;
  left:0px;
}
</style>
