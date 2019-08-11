import Vue from 'vue';
import VueRouter from 'vue-router';
import scene from './scene/begin.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect: '/index'},
    {path:'/index',component:scene},
    {
      path:'/scene1',
      component:scene,
      children: [
        {path: 'box1',component: scene},
        {path: 'box2',component: scene},
        {path: 'box3',component: scene},
      ]
    },
    {path:'/scene2',component:scene},
  ],
})

//全局前置守卫
router.beforeEach((to, from, next)=>{
  next();
});

export default router