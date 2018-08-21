<template>
  <div class="fly">
   <!-- <Header title="福州市醉得意餐饮运营监控"></Header>-->
    <div class="main clearfix">
      <div class="fly-left">
        <div class="tour clearfix">
          <div class="tour-left">
            <h3 class="tour-number">今日接待总量</h3>
            <div class="tour-yesterday">
              <span>昨日游客总量</span>
              <br>
              <span>5201314</span>
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
              <i>人</i>
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
        <div class="tour-map">
          <Map></Map>
        </div>
      </div>

      <div class="fly-right">
        <div class="fly-right-top">
          <h3>今日收入总览</h3>
          <div class="add">
              <p>目前累计收入</p>
              <p> <span>758</span> <i>万元</i></p>
              <p>同比昨日</p>
              <p> <span class="my-add">+</span> <span>2%</span> </p>
          </div>
          <div class="done">
            <p class="done-title">目标完成率</p>
            <div class="done-bottom">
              <p><span class="done-bg1"></span> 未完成</p>
              <p><span class="done-bg2"></span> 已完成</p>
            </div>
          </div>
          <div class="money">
            <Ruan1></Ruan1>
          </div>

        </div>
        <div class="fly-right-center">
          <Hot>
            <template slot="title">
              本月门店营销量排行榜
            </template>
            <template >
              <tr>
                <td class="else">排名</td>
                <td class="else">店铺名称</td>
                <td class="else">营销额/万元</td>
                <td class="else">同比上月</td>
              </tr>
              <tr v-for="(item, index) in
                        flyHotel" :key="index">
                <td><span>{{(index+1)}}</span></td>
                <td>{{item.shop_name}}</td>
                <td>{{item.sal}}</td>
                <td>{{item.last_month}}</td>
              </tr>
            </template>
          </Hot>
        </div>
        <div class="fly-right-bottom">
          <h3>近半年收入情况</h3>

          <div class="zui">
             <Zui></Zui>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Hot from "../../components/Hot/Hot.vue";
  import Header from "../../components/Base/Header/Header.vue";
  import Map from "../../components/Map/FoodMap.vue";
  import Ruan1 from "../../components/Echarts/Hotel/Ruan1.vue";
  import Zui from "../../components/Echarts/Hotel/ZuiZhuZhe.vue";
  import {ZuiDeYiCount} from "../../api";
  export default {
    data() {
      return {
        tempData:[],
        myNumber:"012044", //实时人数
        timer: null,
        timer1: null,
        loading: false,
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
      this.getAll();
      this.changeNumber();
    },
    methods: {
      /*获取本页面所有数据*/
      async getAll() {
        let data = await ZuiDeYiCount();
        if(!data) {return false}
        this.flyHotel = data;
      },
      /*模拟到港人数 m~n的随机数*/
      roundNumber(m, n) {
        return Math.round( Math.random()*(n-m) + m)
      },
      computedNumber() {
        this.myNumber=parseInt(this.myNumber)
          + this.roundNumber(1,25) +'';
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
      Hot,
      Map,
      Ruan1,
      Zui,
    },
    beforeDestroy() {
      /*记得清页面定时器*/
      clearInterval(this.timer);
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

  .fly-left {
    width: 68%;
    box-sizing: border-box;
    padding-left: 2%;
    border-right: 1px solid #16A2BF;
    background: url("../../../static/images/Fly/fly-left.jpg") no-repeat;
    background-size: 100% 100%;
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

  }
  .tour-right {
    width: 75%;
    position: relative;
  }

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 4%;
      font-size: 18px;
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
        background: url("../../../static/images/Fly/person.jpg") no-repeat;
        background-size: 100% 100%;
      }
      i {
        font-size: 16px;
        color: #fff;
        vertical-align: bottom;
      }

    }
    .tour-yesterday {
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
    .fly-right {
      width: 31.9%;
      background: url("../../../static/images/Fly/fly-right.jpg") no-repeat;
      display: flex;
      flex-direction: column;
      .fly-right-top {
        flex: 3;
        position: relative;
        h3 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 1% 10%;
          color: #16A2BF;
        }
        .money {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 30%;
          top: 10%;
        }
        .add  {
          position: absolute;
          width: 100%;
          height: 80%;
          p {
            color: #fff;
            margin-top: 5px;
            margin-left: 10px;
            &:nth-child(1) {
              margin-top: 10px;
            }
            span {
              color: #dea90f;
              font-size: 30px;
              &.my-add {
                color: #2cc4c5;
              }
            }
            i {
              color: yellow;
              font-size: 16px;
            }
          }
        }
        .done {
          position: absolute;
          left: 35%;
          width: 30%;
          height: 80%;
          color: #fff;
          .done-title {
            margin-top: 10px;
            text-align: center;
          }
          .done-bottom {
            position: absolute;
            width: 100%;
            bottom: 22%;
            p {
              text-align: center;
              font-size: 12px;
              span {
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                &.done-bg1 {
                  background: #2bc3c4;
                }
                &.done-bg2 {
                  background: #ffc000;
                }
              }
            }
          }
        }

      }
      .fly-right-center {
        flex: 2;
      }
      .fly-right-bottom {
        flex: 3;
        position: relative;
        h3 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 1% 10%;
          color: #16A2BF;
        }
        .zui {
          position: absolute;
          height: 100%;
          width: 100%;
        }

      }
    }
  }
  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 4%;
      font-size: 22px;
      color: #ffffb8;
      border-left: 4px solid #13bad2;
    }
    .tour-yesterday {
      color: #fff;
      font-size: 16px;
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
        background: url("../../../static/images/Fly/person.jpg") no-repeat;
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
    .fly-right {
      width: 31.9%;
      background: url("../../../static/images/Fly/fly-right.jpg") no-repeat;
      display: flex;
      flex-direction: column;
      .fly-right-top {
        flex: 3;
        position: relative;
        h3 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 1% 10%;
          color: #16A2BF;
        }
        .money {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 30%;
          top: 10%;
        }
        .add  {
          position: absolute;
          width: 100%;
          height: 80%;
          left: 10%;
          top: 20%;
          p {
            color: #fff;
            margin-top: 2%;
            margin-left: 10px;
            font-size: 20px;
            &:nth-child(1) {
              margin-top: 10px;
            }
            span {
              color: #dea90f;
              font-size: 35px;
              &.my-add {
                color: #2cc4c5;
              }
            }
            i {
              color: yellow;
              font-size: 16px;
            }
          }
        }
        .done {
          position: absolute;
          left: 35%;
          width: 30%;
          height: 80%;
          color: #fff;
          .done-title {
            margin-top: 20%;
            font-size: 18px;
            text-align: center;
          }
          .done-bottom {
            position: absolute;
            width: 100%;
            bottom: 22%;
            p {
              text-align: center;
              font-size: 16px;
              span {
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                &.done-bg1 {
                  background: #2bc3c4;
                }
                &.done-bg2 {
                  background: #ffc000;
                }
              }
            }
          }
        }

      }
      .fly-right-center {
        flex: 2;
      }
      .fly-right-bottom {
        flex: 3;
        position: relative;
        h3 {
          width: 80%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #16A2BF;
          margin: 1% 10%;
          color: #16A2BF;
        }
        .zui {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 10%;
        }

      }
    }
  }


  .tour-map {
    height: 88.43%;
  }







</style>
