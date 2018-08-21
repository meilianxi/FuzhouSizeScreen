<template>
    <div class="hotel">
     <!-- <Header title="福州市住宿资源大屏" class="header"></Header>-->
      <div class="main">
        <div class="main-left">
          <div class="main-left-top">
            <h3>酒店关注度</h3>
            <div class="eacharHotel">
             <!-- <Rander></Rander>-->
            </div>
          </div>
          <div class="main-left-bottom">
            <h4>近一周酒店房型预定情况</h4>
            <Ruan2 class="ruan2"></Ruan2>
            <Ruan21 class="ruan21"></Ruan21>
            <div class="ruan2-title1">标准房</div>
            <div class="ruan2-title2">已经预定 <span>300</span> 间</div>

            <div class="ruan21-title1">大床房</div>
            <div class="ruan21-title2">已经预定 <span>821</span> 间</div>
          </div>
        </div>
        <div class="main-center">
          <div class="main-center-top"></div>
          <div class="main-center-bottom">
            <h4>近一周景区停车场使用情况分析</h4>
            <div class="main-center-bottom-zhu">
              <Shuang></Shuang>
            </div>
          </div>

        </div>
        <div class="main-right">
          <div class="main-right-top">
            <div class="main-right-top-t">
              酒店热度Top10
            </div>
            <div class="main-right-top-b">
              <Hot_hotel>
                  <template >
                    <tr>
                      <td class="else">排名</td>
                      <td class="else">酒店</td>
                      <td class="else">入住量</td>
                    </tr>
                    <tr v-for="(item, index) in
                        flyHotel" :key="index">
                      <td><span>{{(index+1)}}</span></td>
                      <td>{{item.hotel_name}}</td>
                      <td>{{item.num}}</td>
                    </tr>
                  </template>
              </Hot_hotel>
            </div>
          </div>
          <div class="main-right-bottom">
            <h4>实时四星级以上酒店入住率</h4>
            <RuanHuan class="main-right-bottom-yuan"></RuanHuan>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import Header from "../../components/Base/Header/Header.vue";
    import Rander from "../../components/Echarts/Hotel/Rander.vue";
    import {FuZhouHotel} from "../../api";
    import Hot_hotel from "../../components/Hot/Hot_hotel.vue";
    /*右侧圆环*/
    import  RuanHuan from "../../components/Echarts/Hotel/HoterRuanHuan.vue";
    import Shuang from "../../components/Echarts/Hotel/ShuangZhu.vue";
    import Ruan2 from "../../components/Echarts/Hotel/Ruan2.vue";
    import Ruan21 from "../../components/Echarts/Hotel/Ruan21.vue";
    export default {
        data() {
            return {
              flyHotel: []
            }
        },
      mounted() {
          this.getFuZhouHotel();
      },
        props: [''],
        computed: {},
        methods: {
          async getFuZhouHotel() {
            let data = await FuZhouHotel();
            this.flyHotel = data;
          }
        },
        components: {
          Header,
          Rander,
          Hot_hotel,
          RuanHuan,
          Shuang,
          Ruan2,
          Ruan21
        }
    }
</script>

<style lang="less" scoped>
  .hotel {
    height: 100%;
  }
  .header {
    height: 12%;
  }
  .main {
    height: 100%;
    display: flex;
    background: url("../../../static/images/Base/bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .main-left, .main-center, .main-right {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    .main-left {
      flex: 2;
      .main-left-top {
        flex: 1;
        h3 {
          height: 10%;
          margin-left: 5px;
          padding-left: 10px;
          color: yellow;
          border-left: 1px solid blue;
        }
        .eacharHotel {
          height: 90%;
          background: url("../../../static/images/Hotel/rander.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }

      .main-left-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-top: 1px solid #16A2BF;
        position: relative;
        .ruan2 {
          position: absolute;
          top: 90px;
          left: -40px;
        }
        .ruan21 {
          position: absolute;
          top: -30px;
          left: -40px;
        }
        .ruan2-title1, .ruan2-title2, .ruan21-title1, .ruan21-title2 {
          position: absolute;
          color: #fff;
          font-size: 12px;
        }
        .ruan2-title1 {
          left: 90px;
          top: 165px;
        }
        .ruan2-title2 {
          left: 150px;
          top: 110px;
          span {
            color: #f5bd16;
          }
        }
        .ruan21-title1 {
          left: 90px;
          top: 277px;
        }
        .ruan21-title2 {
          left: 150px;
          top: 230px;
          span {
            color: #f5bd16;
          }
        }
      }
    }
    .main-center {
      flex: 3;
      .main-center-top {
        flex: 1.5;
        background: url("../../../static/images/Hotel/hotel_map.jpg") no-repeat;
        background-size: 100% 100%;
        border-bottom: 1px solid #16A2BF;
        border-left: 1px solid #16A2BF;
      }
      .main-center-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-left: 1px solid #16A2BF;
        position: relative;
        .main-center-bottom-zhu {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 18%;
        }
      }
    }
  }
  @media screen and (min-width: 1025px) and (max-width:1280px) {
    .main-left {
      flex: 2;
      .main-left-top {
        flex: 1;
        h3 {
          height: 10%;
          margin-left: 5px;
          padding-left: 10px;
          color: yellow;
          border-left: 1px solid blue;
        }
        .eacharHotel {
          height: 90%;
          background: url("../../../static/images/Hotel/rander.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }

      .main-left-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-top: 1px solid #16A2BF;
        position: relative;
        .ruan2 {
          position: absolute;
          top: 70px;
          left: -40px;
        }
        .ruan21 {
          position: absolute;
          top: -30px;
          left: -40px;
        }
        .ruan2-title1, .ruan2-title2, .ruan21-title1, .ruan21-title2 {
          position: absolute;
          color: #fff;
          font-size: 12px;
        }
        .ruan2-title1 {
          left: 130px;
          top: 140px;
        }
        .ruan2-title2 {
          left: 190px;
          top: 100px;
          span {
            color: #f5bd16;
          }
        }
        .ruan21-title1 {
          left: 130px;
          top: 237px;
        }
        .ruan21-title2 {
          left: 190px;
          top: 190px;
          span {
            color: #f5bd16;
          }
        }
      }
    }
    .main-center {
      flex: 3;
      .main-center-top {
        flex: 1.5;
        background: url("../../../static/images/Hotel/hotel_map.jpg") no-repeat;
        background-size: 100% 100%;
        border-bottom: 1px solid #16A2BF;
        border-left: 1px solid #16A2BF;
      }
      .main-center-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-left: 1px solid #16A2BF;
        position: relative;
        .main-center-bottom-zhu {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 18%;
        }
      }
    }
  }
  @media screen and (min-width: 1281px) and (max-width:1600px) {
    .main-left {
      flex: 2;
      .main-left-top {
        flex: 1;
        h3 {
          height: 10%;
          margin-left: 5px;
          padding-left: 10px;
          color: yellow;
          border-left: 1px solid blue;
        }
        .eacharHotel {
          height: 90%;
          background: url("../../../static/images/Hotel/rander.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }

      .main-left-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-top: 1px solid #16A2BF;
        position: relative;
        .ruan2 {
          position: absolute;
          top: 100px;
          left: -40px;
        }
        .ruan21 {
          position: absolute;
          top: -30px;
          left: -40px;
        }
        .ruan2-title1, .ruan2-title2, .ruan21-title1, .ruan21-title2 {
          position: absolute;
          color: #fff;
          font-size: 12px;
        }
        .ruan2-title1 {
          left: 37%;
          top: 58%;
        }
        .ruan2-title2 {
          left: 57%;
          top: 77%;
          span {
            color: #f5bd16;
          }
        }
        .ruan21-title1 {
          left: 37%;
          top: 94%;
        }
        .ruan21-title2 {
          left: 57%;
          top: 40%;
          span {
            color: #f5bd16;
          }
        }
      }
    }
    .main-center {
      flex: 3;
      .main-center-top {
        flex: 1.5;
        background: url("../../../static/images/Hotel/hotel_map.jpg") no-repeat;
        background-size: 100% 100%;
        border-bottom: 1px solid #16A2BF;
        border-left: 1px solid #16A2BF;
      }
      .main-center-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-left: 1px solid #16A2BF;
        position: relative;
        .main-center-bottom-zhu {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 13%;
        }
      }
    }
  }
  @media screen and (min-width: 1601px) {
    .main-left {
      flex: 2;
      .main-left-top {
        flex: 1;
        h3 {
          height: 10%;
          margin-left: 5px;
          padding-left: 10px;
          color: yellow;
          border-left: 1px solid blue;
        }
        .eacharHotel {
          height: 90%;
          background: url("../../../static/images/Hotel/rander.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }

      .main-left-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-top: 1px solid #16A2BF;
        position: relative;
        .ruan2 {
          position: absolute;
          top: 120px;
          left: -40px;
        }
        .ruan21 {
          position: absolute;
          top: -30px;
          left: -40px;
        }
        .ruan2-title1, .ruan2-title2, .ruan21-title1, .ruan21-title2 {
          position: absolute;
          color: #fff;
          font-size: 12px;
        }
        .ruan2-title1 {
          left: 40%;
          top: 58%;
        }
        .ruan2-title2 {
          left: 57%;
          top: 77%;
          span {
            color: #f5bd16;
          }
        }
        .ruan21-title1 {
          left: 40%;
          top: 94%;
        }
        .ruan21-title2 {
          left: 57%;
          top: 40%;
          span {
            color: #f5bd16;
          }
        }
      }
    }
    .main-center {
      flex: 3;
      .main-center-top {
        flex: 1.5;
        background: url("../../../static/images/Hotel/hotel_map.jpg") no-repeat;
        background-size: 100% 100%;
        border-bottom: 1px solid #16A2BF;
        border-left: 1px solid #16A2BF;
      }
      .main-center-bottom {
        flex: 1;
        h4 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 2% 10%;
          color: #16A2BF;
        }
        border-left: 1px solid #16A2BF;
        position: relative;
        .main-center-bottom-zhu {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 13%;
        }
      }
    }
  }

  .main-right {
    flex: 2;
    .main-right-top {
      flex: 1.5;
      .main-right-top-t {
        height: 7%;
        padding-left: 10px;
        margin-left: 10%;
        display: flex;
        color: yellow;
        align-items: center;
        border-left: 1px solid #16A2BF;
      }
      .main-right-top-b {
        height: 93%;
      }
      border-left: 1px solid #16A2BF;
      border-bottom: 1px solid #16A2BF;
    }
    .main-right-bottom {
      flex: 1;
      position: relative;
      border-left: 1px solid #16A2BF;
      h4 {
        width: 80%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #16A2BF;
        margin: 2% 10%;
        color: #16A2BF;
      }
      .main-right-bottom-yuan  {
        width: 100%;
        height: 100%;
        position: absolute;
        left: -10%;
      }
    }
  }

</style>
