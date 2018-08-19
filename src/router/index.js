import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import FuzhouGuiAn from "../pages/FuzhouGuiAn/FuzhouGuiAn.vue";
import FuzhouChangLe from "../pages/FuzhouChangLe/FuzhouChangLe.vue";
import Fly from "../pages/Fly/Fly1.vue";
import Fly2 from "../pages/Fly/Fly2.vue";
import FuzhouServer from "../pages/FuzhouServer/FuzhouServer.vue";
import ThreeLanes from "../pages/ThreeLanes/ThreeLanes.vue";
import GuLou from "../pages/GuLou/GuLou.vue";
import JianGuan from "../pages/JianGuan/JianGuan.vue";
/*两张路牌*/
import GuShan from "../pages/GuideBoard/GuShan.vue";

/*餐饮*/
import Food  from "../pages/Food/Food.vue";

/*酒店*/
import Hotel  from "../pages/Hotel/Hotel.vue";



export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/fly"
    },
    {
      path: '/an',
      name: 'FuzhouGuiAn',
      component: FuzhouGuiAn
    },
    {
      path: '/le',
      name: 'FuzhouChangLe',
      component: FuzhouChangLe
    },

    {
      path: '/fly',
      name: 'Fly',
      component: Fly
    },
    {
      path: '/fly2',
      name: 'Fly2',
      component: Fly2
    },
    {
      path: '/server',
      name: 'FuzhouServer',
      component: FuzhouServer
    },
    {
      path: '/three',
      name: 'ThreeLanes',
      component: ThreeLanes
    },
    {
      path: '/gu',
      name: 'GuLou',
      component: GuLou
    },
    {
      path: '/jian',
      name: 'JianGuan',
      component: JianGuan
    },
    {
      path: '/guide1',
      name: 'GuShan',
      component: GuShan
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    },

  ]
})
