<template>
  <div class="little clearfix">

    <div class="little-left">
      <div class="left-top">
        <h2>您当前所在的位置</h2>
        <h1>长乐机场</h1>
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
        <div class="my-loading">
          <Loading class="my-loading" v-if="loading"></Loading>
        </div>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <Humanity3 :imgArr = "imgArr1" :spotData="humanity">
              <template slot="title">
                人文景观推荐
              </template>
            </Humanity3>
          </swiper-slide>
          <swiper-slide>
            <Humanity3 :imgArr = "imgArr2" :spotData="nature">
              <template slot="title">
                榕城青山推荐
              </template>
            </Humanity3>
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
  import Humanity3 from "../../components/Humanity/Humanity3.vue";
  import Loading from "../../components/Loading/Loading.vue";

  /*获取数据*/
   import {getChangLeHumanity, getChangLeNatural} from "../../api";
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
        imgArr1: [],
        imgArr2: [],
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
        let humanity = await getChangLeHumanity();
        let nature = await getChangLeNatural();
        if(humanity) {
          this.loading = false;
        }

        for(let i=0; i < humanity.length;i++) {
              this.imgArr1.push(humanity[i].scen_url);
        }

        for(let i=0; i < nature.length;i++) {
          this.imgArr2.push(nature[i].scen_url);
        }

        /*临时存储*/
        let humanityTemp = [];
        let natureTemp = [];
        /*自定义人数饱和标准,每个景点人数标准不一样,
       * 只能分开写
       * */
        humanityTemp.push
        (this.handleData(humanity[0],2000,5000));
        humanityTemp.push
        (this.handleData(humanity[1],4000,7000));
        humanityTemp.push
        (this.handleData(humanity[2],5,6));
        humanityTemp.push
        (this.handleData(humanity[3],2,6));
        humanityTemp.push
        (this.handleData(humanity[4],3,8));
        humanityTemp.push
        (this.handleData(humanity[5],6,10));

        natureTemp.push
        (this.handleData(nature[0],2000,5000));
        natureTemp.push
        (this.handleData(nature[1],4000,7000));
        natureTemp.push
        (this.handleData(nature[2],5,6));
        natureTemp.push
        (this.handleData(nature[3],2,6));
        natureTemp.push
        (this.handleData(nature[4],3,8));
        natureTemp.push
        (this.handleData(nature[5],6,10));
        this.humanity = humanityTemp;
        this.nature = natureTemp;
      },
      lun() {
        this.timer=setInterval(this.getData, 3000);
      }
    },
    components: {
      LittleTime,
      Humanity3,
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
          color: #fefefe;
          margin-top: 15px;
          font-size: 45px;
          text-align: center;
        }

      }
      .left-center {
        height: 45%;
        background: url("../../../static/images/FuzhouChangLe/changLeFly.jpg")  no-repeat;
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
        background: url("../../../static/images/FuzhouChangLe/changLeFly.jpg")  no-repeat;
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
