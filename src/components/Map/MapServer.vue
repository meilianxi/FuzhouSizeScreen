<template>
  <div class="my-map">
    <!--百度地图部分,需传入经纬度,级数-->
    <HotMap class="hot-map"
            :longitude = "longitude"
            :latitude = "latitude"
            :mapScale = "mapScale"
    ></HotMap>
    <!--地图标题部分-->
    <div class="map-title">
      福州景区实时人流量
    </div>
    <!--一机游-->
    <div class="tour-fly"></div>
    <!--景点地点-->
    <div class="spot move1">
      <!--小动画-->
      <div class="animation">
        <Move :isShow = "myshow[1]" :selectColor="spotsData[1].type"></Move>
      </div>
      <div class="task">
        <h3>{{spotsData[1].scenic_name}}</h3>
        <h4>{{spotsData[1].scenic_dis}}
          <span>车程 {{spotsData[1].time}} min</span></h4>
        <h5>实时游客 <span>{{spotsData[1].crrent_num}}</span>人</h5>
      </div>
    </div>
    <div class="spot move2">
      <!--小动画-->
      <div class="animation">
        <Move :isShow = "myshow[2]" :selectColor="spotsData[2].type"></Move>
      </div>
      <div class="task">
        <h3>{{spotsData[2].scenic_name}}</h3>
        <h4>{{spotsData[2].scenic_dis}}
          <span>车程 {{spotsData[2].time}} min</span></h4>
        <h5>实时游客 <span>{{spotsData[2].crrent_num}}</span>人</h5>
      </div>
    </div>
    <div class="spot move3">
      <!--小动画-->
      <div class="animation">
        <Move :isShow = "myshow[0]" :selectColor="spotsData[0].type"></Move>
      </div>
      <div class="task">
        <h3>{{spotsData[0].scenic_name}}</h3>
        <h4>{{spotsData[0].scenic_dis}}
          <span>车程 {{spotsData[0].time}} min</span></h4>
        <h5>实时游客 <span>{{spotsData[0].crrent_num}}</span>人</h5>
      </div>
    </div>
    <div class="spot move4" >
      <!--小动画-->
      <div class="animation">
        <Move :isShow = "myshow[3]" :selectColor="spotsData[3].type"></Move>
      </div>
      <div class="task">
        <h3>{{spotsData[3].scenic_name}}</h3>
        <h4>{{spotsData[3].scenic_dis}}
          <span>车程 {{spotsData[3].time}} min</span></h4>
        <h5>实时游客 <span>{{spotsData[3].crrent_num}}</span>人</h5>
      </div>
    </div>
    <div class="spot move5" >
      <!--小动画-->
      <div class="animation">
        <Move :isShow = "myshow[4]" :selectColor="spotsData[4].type"></Move>
      </div>
      <div class="task">
        <h3>{{spotsData[4].scenic_name}}</h3>
        <h4>{{spotsData[4].scenic_dis}}
          <span>车程 {{spotsData[4].time}} min</span></h4>
        <h5>实时游客 <span>{{spotsData[4].crrent_num}}</span>人</h5>
      </div>
    </div>
    <div class="spot move6" >
      <!--小动画-->
      <div class="animation">
        <Move :isShow = "myshow[5]" :selectColor="spotsData[5].type"></Move>
      </div>
      <div class="task">
        <h3>{{spotsData[5].scenic_name}}</h3>
        <h4>{{spotsData[5].scenic_dis}}
          <span>车程 {{spotsData[5].time}} min</span></h4>
        <h5>实时游客 <span>{{spotsData[5].crrent_num}}</span>人</h5>
      </div>
    </div>
    <!--您所在的位置-->
    <div class="my-position">
      <span></span>
      <div class="my-position-task">
        您现在所在的位置
        福州长乐国际机场
      </div>
    </div>
  </div>
</template>
<script>
  import Move from "../Aimation/Aimation.vue";
  import HotMap from "./HotMap.vue";
  import Vue from 'vue';
  import {ChangLeMap} from "../../api";
  export default {
    data() {
      return {
        myshow: [true, false, false, false, false, false],
        myIndex: 0,
        timer1: null,
        timer2: null,
        //地图的经纬度和级数 119.310944,26.089515
        longitude: 119.310944,
        latitude: 26.089515,
        mapScale: 13,
        /*景点数据*/
        spotsData: []
      }
    },
    mounted() {
      this.change();
      this.isShow();
      this.flyMapData();
      /*实时测试*/
//      this.nowTest();
    },
    methods: {
      isShow() {
        this.timer1 = setInterval(this.change, 5300);
      },
      change() {
        this.myIndex >5 ? this.myIndex=0 : null;
        for(let i =0; i<6; i++) {
          this.myshow[i] = false;
        }
        Vue.set(this.myshow,this.myIndex,true);
        this.myIndex++;
      },

       async flyMapData() {
        let data = await ChangLeMap()
        data = data.slice(0,6);
        /*需处理*/
        if(data) {
          for(let i=0;i<data.length;i++) {
            let cur = data[i];
            let num = data[i].crrent_num;
            if(num < 2000) {
              cur.type =0;
            } else if(num <3000) {
              cur.type =1;
            } else {
              cur.type =2;
            }
          }
        }
        /*处理好颜色了*/
        this.spotsData = data;
      },
      nowTest() {
        this.timer2 = setInterval(this.myTmest,8000);
      }

    },
    components: {
      Move,
      HotMap
    },
    beforeDestroy() {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
    }
  }
</script>

<style lang="less" scoped>
  .hot-map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .map-title {
    position: absolute;
    width: 400px;
    padding-left: 20px;
    font-size: 25px;
    color: #ffffb8;
    left: 0;
    top: 1%;
  }

  .my-map {
    height: 100%;
    position: relative;
    /* background: url("../../../static/map.jpg") no-repeat;
     background-size: 99.5% 100%;*/
  }

  .tour-fly {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 10.7%;
    height: 25.8%;
    /*background: url("../../../static/tour.jpg") no-repeat;*/
    background-size: 100% 100%;
  }

  .spot {
    position: absolute;
    width: 230px;
    height: 60px;
    color: #fff;
  }
  .animation {
    position: absolute;
  }
  .task {
    margin-left: 37px;
    margin-top: 20px;
    height: 60px;
    background: rgba(0,0,0,.5);
    h3 {
      color: yellow;
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
    span {
      margin-left: 10px;
    }
    h5 {
      font-size: 14px;
    }
  }

  /*移动地点*/
  .move1 {
    left: 60%;
    top: 60%;
  }

  .move2 {
    left: 10%;
    top: 60%;
  }

  .move3 {
    left: 65%;
    top: 20%;
  }
  .move4 {
    left: 35%;
    top: 22%;
  }
  .move5 {
    left: 20%;
    top: 60%;
  }
  .move6 {
    left: 30px;
    top: 60px;
  }

  .my-position {
    position: absolute;
    left: 48%;
    top: 46%;
    width: 150px;
    span {
      display: inline-block;
      width: 25px;
      height: 25px;
      /*background: url("../../../static/litle-fly.jpg") no-repeat;*/
      background-size: 100% 100%;
    }
  }
  .my-position-task {
    position: absolute;
    left: 16%;
    top: 10%;
    font-size: 14px;
    color: #fff;
    background: rgba(0,0,0,.5);
  }
</style>
