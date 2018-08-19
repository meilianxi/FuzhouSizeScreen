<template>
  <div class="little clearfix">

    <div class="little-left">
      <div class="left-top">
        <h2>您当前所在的位置</h2>
        <h1>购票处</h1>
      </div>
      <div class="left-center">

      </div>
      <!--left-bottom时间部分-->
      <LittleTime></LittleTime>
    </div>
    <div class="little-right">
      <!--人文景观-->
      <!--测试轮播-->
      <div class="main">
        <!--loading动画-->
        <Loading class="my-loading" v-if="loading"></Loading>

        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <Humanity :imgArr = "imgArr" :spotData="humanity">
              <template slot="title">
                主要游玩项目
              </template>
            </Humanity>
          </swiper-slide>
          <swiper-slide>
            <Humanity2 :imgArr = "imgArr" :spotData="nature">
              <template slot="title">
                园内游客分布
              </template>
            </Humanity2>
          </swiper-slide>


        </swiper>
        <!--轮播图的分页-->
        <div class="my-page">
          <div class="swiper-pagination"  slot="pagination"></div>
        </div>
      </div>


    </div>


  </div>
</template>
<script>

  import LittleTime from "../../components/LittleTime/LittleTime.vue";
  import Humanity from "../../components/Humanity/Humanity.vue";
  import Humanity2 from "../../components/Humanity/Humanity2.vue";
  import Loading from "../../components/Loading/Loading.vue";

  /*获取数据*/
  import {getGuiAn} from "../../api";
  export default {
    mounted() {
      this.getData();
      /*下方定时轮询,不建议时间太短*/
//      this.lun();
    },
    data() {
      return {
        test:[],
        timer: null,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 8000,
          },
        },
        /*人文景观数据*/
        humanity: [],
        nature: [],
        imgArr: [],
        /*loading动画*/
        loading: true
      }
    },
    props: [''],
    computed: {},
    methods: {
      /*处理数据函数*/
      /*参数,需要加标志的当前对象,人数标准一,人数标准二*/
      handleData(obj, littleNum, middleNum) {
        let num = obj.play_num;
        if(num < littleNum) {
          obj.type = 0;
        } else if(num <= middleNum) {
          obj.type = 1;
        } else {
          obj.type = 2;
        }
        return obj;
      },

      async getData() {
        let humanity = await getGuiAn();
        if(humanity) {
          this.loading = false;
        }
        /*临时存储*/
        let humanityTemp = [];
        /*自定义人数饱和标准,每个景点人数标准不一样,
       * 只能分开写
       * */
        humanityTemp.push
        (this.handleData(humanity[0],250,300));
        humanityTemp.push
        (this.handleData(humanity[1],200,500));
        humanityTemp.push
        (this.handleData(humanity[2],5,6));
        humanityTemp.push
        (this.handleData(humanity[3],2,6));
        humanityTemp.push
        (this.handleData(humanity[4],3,8));
        humanityTemp.push
        (this.handleData(humanity[5],6,10));
        humanityTemp.push
        (this.handleData(humanity[6],6,10));

        for(let i=0; i < humanity.length;i++) {
          this.imgArr.push(humanity[i].scen_url);
        }

        this.humanity = humanityTemp;
      },
      lun() {
        this.timer=setInterval(this.getData, 3000);
      }
    },
    components: {
      LittleTime,
      Humanity,
      Humanity2,
      Loading
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>
  .little {
    width: 100%;
    height: 100%;
  }

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .little-left {
      width: 22%;
      height: 100%;
      float: left;
      .left-top {
        height: 30%;
        background: #1c4885;
        h2 {
          padding-top: 10%;
          color: #fff;
          text-align: center;
          font-size: 25px;
        }
        h1 {
          color: #fd0d1e;
          margin-top: 15px;
          font-size: 50px;
          text-align: center;
        }

      }
      .left-center {
        height: 45%;
        background: url("../../../static/images/FuzhouGuiAn/Play1.png")  no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    .little-left {
      width: 22%;
      height: 100%;
      float: left;
      .left-top {
        height: 30%;
        background: #1c4885;
        h2 {
          padding-top: 15%;
          color: #fff;
          text-align: center;
          font-size: 40px;
        }
        h1 {
          color: #fd0d1e;
          margin-top: 10%;
          font-size: 60px;
          text-align: center;
        }

      }
      .left-center {
        height: 45%;
        background: url("../../../static/images/FuzhouGuiAn/Play1.png")  no-repeat;
        background-size: 100% 100%;
      }

    }
  }


  .little-right {
    width: 78%;
    height: 100%;
    float: left;
    background: #002559;
    padding: 1.5%;
    box-sizing: border-box;
    overflow: hidden;
    .main {
      height: 100%;
      border: 2px solid #13bad2;
      position: relative;
      .my-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 99;
        transform: translate(-50%, -50%);
      }

    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .my-page {
      display: flex;
      justify-content: center;
    }

  }

</style>
