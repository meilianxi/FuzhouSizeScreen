<template>
    <div class="hotel">
     <!-- <Header title="福州市住宿资源大屏" class="header"></Header>-->
      <div class="main">
        <div class="main-left">
          <div class="main-left-top">
            <h3>酒店关注度</h3>
            <div class="eacharHotel">
              <Rander></Rander>
            </div>
          </div>
          <div class="main-left-bottom"></div>
        </div>
        <div class="main-center">
          <div class="main-center-top"></div>
          <div class="main-center-bottom"></div>
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
          RuanHuan
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
      }
    }
    .main-left-bottom {
      flex: 1;
      background: #999;
    }
  }
  .main-center {
    flex: 3;
    .main-center-top {
      flex: 1.5;
      background: url("../../../static/images/Hotel/hotel_map.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .main-center-bottom {
      flex: 1;
      background: #eee;
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
    }
    .main-right-bottom {
      flex: 1;
      position: relative;
      .main-right-bottom-yuan  {
        width: 100%;
        height: 100%;
        position: absolute;
        left: -10%;
      }
    }
  }

</style>
