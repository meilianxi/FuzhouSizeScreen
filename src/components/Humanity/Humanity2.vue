<template>
  <div class="my-mian">
    <div class="main-top">
      <div class="title">
        <h1>
          <slot name="title">人文景观推荐</slot>
        </h1>
        <div class="air">
          <span>福建福州</span>
          <span>{{highTemp}}℃/{{lowTemp}}℃</span>
        </div>
      </div>
      <div class="spots">
          <div class="spots-left">
              <div class="my-wrap">
                <p>人流量饱和度</p>
                <p>饱和度达到90%上景区</p>
                <p>饱和度30%-90%景区</p>
                <p>饱和度30%以下景区</p>
              </div>
          </div>
          <div class="spots-center">
          </div>
          <div class="spots-right">
                <div class="spots-right-bg">

                </div>
          </div>
      </div>
    </div>
    <div class="main-bottom">
        <div class="task">
            <h2>请大家避开人流高峰,增加游玩体验</h2>
        </div>
    </div>
  </div>

</template>
<script>
  import Carousel from "../Carousel/Carousel.vue";
  //    获取天气温度
  import {getWeather} from "../../api";
  export default {
    created() {
      this.getWeatherData();
    },
    data() {
      return {
        highTemp: 13,
        lowTemp: 14
      }
    },
    props: {
      imgArr: Array,
      spotData: Array,
    },
    methods: {
      async getWeatherData() {
        let data = await getWeather();
        let weatherData=data.forecast[0];
        this.highTemp = weatherData.high.slice(3,5);
        this.lowTemp = weatherData.low.slice(3,5);
      }
    },
    components: {
      Carousel
    }
  }
</script>

<style lang="less" scoped>
  .my-mian {
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    .main-top {
      height: 85%;
      background: #002c63;
      .title {
        position: relative;
        display: flex;
        height: 17%;
        align-items: center;
        justify-content: center;
        h1 {
          color: #fff;
          font-size: 40px;
        }
        .air {
          position: absolute;
          right: 1%;
          top: 50%;
          transform: translate(0, -20%);
          color: #ffcc2a;
          font-size: 22px;
        }
      }

      .spots {
        height: 83%;
        display: flex;
        .spots-left, .spots-center, .spots-right{
          height: 100%;
        }
        .spots-left {
          flex: 1;
          position: relative;

          .my-wrap {
            position: absolute;
            margin: 0 7.5% 8% 7.5%;
            width: 85%;
            bottom: 0;

          }
          p {
            display: flex;
            align-items: center;
            height: 30px;
            justify-content: center;
            margin-bottom: 15px;
            color: #fff;
            font-size: 12px;
            &:nth-child(1) {
              justify-content: flex-start;
              font-size: 18px;
            }
            &:nth-child(2) {
              background: #f81915;
            }
            &:nth-child(3) {
              background: #ffc200;
            }
            &:nth-child(4) {
              background: #4cd61d;
            }

          }
        }
        .spots-center {
          margin-top: -1%;
          flex: 3;
          box-sizing: border-box;
          background: url("../../../static/images/FuzhouGuiAn/center_bg.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .spots-right {
          flex: 1;
          position: relative;
          .spots-right-bg {
            position: absolute;
            left: 5%;
            bottom: 0;
            height: 50%;
            width: 90%;
            background: url("../../../static/images/FuzhouGuiAn/sport.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }

    }
    .main-bottom {
      height: 15%;
      .task {
        height: 75%;
        background: #084f94;
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
          /*1920*/
          /* font-size: 50px;*/
          font-size: 30px;
          color: #fd0f1e;
        }
      }
    }
  }

  @media screen and (min-width: 1025px) {
    .main-top {
      height: 85%;
      background: #002c63;
      .title {
        position: relative;
        display: flex;
        height: 17%;
        align-items: center;
        justify-content: center;
        h1 {
          color: #fff;
          font-size: 40px;
        }
        .air {
          position: absolute;
          right: 1%;
          top: 50%;
          transform: translate(0, -20%);
          color: #ffcc2a;
          font-size: 22px;
        }
      }

      .spots {
        height: 83%;
        display: flex;
        .spots-left, .spots-center, .spots-right{
          height: 100%;
        }
        .spots-left {
          flex: 1;
          position: relative;

          .my-wrap {
            position: absolute;
            margin: 0 7.5% 8% 7.5%;
            width: 85%;
            bottom: 0;

          }
          p {
            display: flex;
            align-items: center;
            height: 30px;
            justify-content: center;
            margin-bottom: 15px;
            color: #fff;
            font-size: 14px;
            &:nth-child(1) {
              justify-content: flex-start;
              font-size: 20px;
            }
            &:nth-child(2) {
              background: #f81915;
            }
            &:nth-child(3) {
              background: #ffc200;
            }
            &:nth-child(4) {
              background: #4cd61d;
            }

          }
        }
        .spots-center {
          margin-top: -1%;
          flex: 3;
          box-sizing: border-box;
          background: url("../../../static/images/FuzhouGuiAn/center_bg.jpg") no-repeat;
          background-size: 100% 100%;
        }
        .spots-right {
          flex: 1;
          position: relative;
          .spots-right-bg {
            position: absolute;
            left: 5%;
            bottom: 0;
            height: 50%;
            width: 90%;
            background: url("../../../static/images/FuzhouGuiAn/sport.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }

    }
    .main-bottom {
      height: 15%;
      .task {
        height: 75%;
        background: #084f94;
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
          /*1920*/
          /* font-size: 50px;*/
          font-size: 30px;
          color: #fd0f1e;
        }
      }
    }
  }




</style>
