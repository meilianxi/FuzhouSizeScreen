<template>
  <div class="fly">
    <!--<Header title="鼓楼区旅游监管大屏"></Header>-->
    <div class="main clearfix">
      <div class="fly-left">
        <div class="tour clearfix">
          <div class="tour-left">
            <h3 class="tour-number">今日客流量</h3>
            <div class="tour-yesterday" style="position: relative;top: -5px;">
              <span style="padding-left: 16px;">昨日游客量:</span>
              <br>
              <span style="padding-left: 18px;">50183</span>
            </div>
          </div>
          <div class="tour-right">
            <div class="right-number clearfix">
              <span>{{myNumber[0]}}</span>
              <span>{{myNumber[1]}}</span>
              <span>{{myNumber[2]}}</span>
              <i>，</i>
              <span>{{myNumber[3]}}</span>
              <span>{{myNumber[4]}}</span>
              <span>{{myNumber[5]}}</span>
              <i style="color:#FFFFBA;">人</i>

              <div class="today-number">
                <h4>今日到港:</h4>
                <b>{{parseInt(myNumber)}}</b>
              </div>
              <div class="today-number">
                <h4>本月到港:</h4>
                <b>654321</b>
              </div>
            </div>
          </div>
        </div>

        <div class="fly-left-bottom clearfix">
          <div class="tour-map-one">

          </div>
          <div class="tour-map-two">
            <div class="tour-map-two-t">
              <Oblaten></Oblaten>
            </div>
            <div class="tour-map-two-b">
              <Oblaten1></Oblaten1>
            </div>


          </div>
          <div class="tour-map-three">
            <Hote></Hote>
          </div>
        </div>
      </div>

      <div class="fly-right">
        <div class="hot">
          <Doughnut></Doughnut>
        </div>
        <div class="my-hot">
          <Ho></Ho>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from "../../components/Base/Header/Header.vue";
  import Hote from "../../components/Hot/Hote.vue";
  import Doughnut from "../../components/Echarts/Doughnut.vue";
  import Oblaten from "../../components/Echarts/Oblaten.vue";
  import Oblaten1 from "../../components/Echarts/Oblaten1.vue";
  import Ho from "../../components/Echarts/Ho.vue";
  //    获取实时人流量
//  import {touristNumber, flyDataAll} from "../api";
  export default {
    data() {
      return {
        tempData:[],
        myNumber:"012044", //实时人数
        wake: true,
        timer1: null,
        flyFood: [],
        flyHotel: [],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 5000,
          },
        }
      }
    },
    mounted() {
      this.changeNumber();
    },
    methods: {
      /*模拟到港人数 m~n的随机数*/
      roundNumber(m, n) {
        return Math.round( Math.random()*(n-m) + m)
      },
      computedNumber() {
        this.myNumber=parseInt(this.myNumber)
          + this.roundNumber(10,25) +'';
        if(this.myNumber.length===5) {
          this.myNumber = "0"+this.myNumber;
        }
        if(this.myNumber.length===4) {
          this.myNumber = "00"+this.myNumber;
        }

      },
      changeNumber() {
        this.timer1 = setInterval(this.computedNumber, 3000);
      }
    },
    components: {
      Header,
      Hote,
      Doughnut,
      Oblaten,
      Oblaten1,
      Ho
    },
    beforeDestroy() {
      clearInterval(this.timer1);
    }
  }
</script>

<style lang="less" scoped>
  .fly {
    height: 100%;
    background: #003069;
  }
  .main {
    height: 100%;
    background: #003069;

  }
  .fly-left,.fly-right {
    float: left;
    height: 100%;
    background-size: 100% 100%;
  }
  .fly-right {
    width: 31.9%;
    background: url("../../../static/images/Fly/fly-right.jpg") no-repeat;
  }
  .fly-left {
    width: 68%;
    box-sizing: border-box;
    padding-left: 2%;
    border-right: 1px solid #16A2BF;
    background: url("../../../static/images/Fly/fly-left.jpg") no-repeat;
  }

  .tour {
    height: 11.57%;
  }
  .tour-left,.tour-right {
    float: left;
    height: 100%;
  }
  .tour-left {
    width: 25%;
    /*background: pink;*/
  }
  .tour-right {
    /*background: pink;*/
    width: 75%;
    position: relative;
  }

  .fly-left-bottom {
    height:88.43%;
    border-top: 1px solid #16A2BF;
    border-left: 1px solid #16A2BF;
  }
  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 4%;
      font-size: 16px;
      color: #ffffb8;
      border-left: 4px solid #13bad2;
    }
    .right-number {
      width: 100%;
      position: absolute;
      left: 1%;
      top: 50%;
      transform: translate(0,-50%);
      span {
        text-align: center;
        display: inline-block;
        width: 30px;
        height: 60px;
        color: #002356;
        font-size: 30px;
        line-height: 65px;
        margin-right: 5px;
        background: url("../../../static/images/Person/person.jpg") no-repeat;
        background-size: 100% 100%;
      }
      i {
        font-size: 16px;
        color: #fff;
        vertical-align: bottom;
      }

    }
    .tour-yesterday {
      margin-top: 3px;
      color: #fff;
      font-size: 14px;
      span {
        padding-left: 20px;
      }
    }
    .today-number {
      width: 100px;
      height: 60px;
      background: rgba(0,0,0,.34);
      float: right;
      color: #fff;
      margin-right: 3%;
      text-align: center;
      h4 {
        margin-top: 8px;
        color: #fff;
        font-size: 18px;
        letter-spacing: 2px;
      }
      b {
        color: yellow;
        font-size: 16px;
      }
    }
  }
  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 3%;
      font-size: 22px;
      color: #ffffb8;
      border-left: 4px solid #13bad2;
    }
    .tour-yesterday {
      color: #fff;
      font-size: 18px;
      margin-top: 3px;
      span {
        padding-left: 20px;
      }
    }
    .right-number {
      width: 100%;
      position: absolute;
      left: 4%;
      top: 50%;
      transform: translate(0,-50%);
      span {
        text-align: center;
        display: inline-block;
        width: 40px;
        height: 70px;
        color: #002356;
        font-size: 40px;
        line-height: 75px;
        margin-right: 5px;
        background: url("../../../static/images/Person/person.jpg") no-repeat;
        background-size: 100% 100%;
      }
      i {
        font-size: 16px;
        color: #fff;
        vertical-align: bottom;
      }

    }
    .today-number {
      width: 150px;
      height: 70px;
      background: rgba(0,0,0,.34);
      float: right;
      color: #fff;
      /*margin-left: 20px;*/
      margin-right: 6%;
      text-align: center;
      h4 {
        margin-top: 8px;
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
      }
      b {
        color: yellow;
        font-size: 18px;
      }
    }
  }


  /*左侧中间部分的地图加上*/
  .tour-map-one {
    height: 60%;
    width: 60%;
    float: left;
    background: url("../../../static/images/Gulou/gulou_map.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .tour-map-two {
    margin-left: 60%;
    margin-top: 2px;
    height: 60%;
    width: 39.9%;
    .tour-map-two-t,.tour-map-two-b {
      width: 100%;
      height: 50%;
    }

  }
  .tour-map-three {
    height: 40%;
    width: 100%;
    border-top: 1px solid #16A2BF;
  }
  .hot {
    height: 62%;
    border-bottom: 1px solid  #16A2BF;
  }
  .my-hot {
    height: 38%;

  }

  /*轮播图*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }


</style>
