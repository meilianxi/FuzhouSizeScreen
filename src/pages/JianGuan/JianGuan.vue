<template>
    <div class="supervise">
      <!--<Header title="福州旅游监管指挥调度大屏"></Header>-->
      <div class="main">
            <div class="mian-top">
                  <div class="mian-top-left">
                      <div class="task">
                          <h2>福州景区今日事故播报</h2>
                          <p>
                            <a>三坊七巷</a>
                            南后街口一辆电瓶车撞到游客
                          </p>
                        <p>
                          <a>贵安欢乐世界</a>
                          旋转木马临时出现故障,暂
                        </p>
                        <p>停使用为您游玩带来不便,请谅解</p>
                        <p>
                          <a>卧龙谷景区</a>
                          旋转木马临时出现故障,暂
                        </p>
                        <p>停使用为您游玩带来不便,请谅解</p>
                        <p>
                          <a>福州于山景区</a>
                          旋转木马临时出现故障,暂
                        </p>
                        <p>停使用为您游玩带来不便,请谅解</p>
                        <p>
                          <a>福州十八重演</a>
                          旋转木马临时出现故障,暂
                        </p>
                        <p>停使用为您游玩带来不便,请谅解</p>
                        <p>
                          <a>温泉度假村</a>
                          旋转木马临时出现故障,暂
                        </p>
                        <p>停使用为您游玩带来不便,请谅解</p>
                      </div>
                  </div>
                  <div class="mian-top-center">
                      <div class="reader">
                        <p>人流量饱和度</p>
                        <p>饱和度达90%上景区</p>
                        <p>饱和度30%-90%景区</p>
                        <p>饱和度30%以下景区</p>
                      </div>
                  </div>
                  <div class="mian-top-right">
                    <Hot2>
                      <template slot="title">
                        福州景区今日可调用资源
                      </template>
                      <template >
                        <tr>
                          <td class="else">景区</td>
                          <td class="else">保安</td>
                          <td class="else">消防</td>
                          <td class="else">医护人员</td>
                          <td class="else">导游</td>
                        </tr>
                        <tr v-for="(item, index) in resource">
                          <td>{{item.scenic_name}}</td>
                          <td>{{item.police}} </td>
                          <td>{{item.firemen}}</td>
                          <td>{{item.doctor}}</td>
                          <td>{{item.guide}}</td>
                        </tr>
                      </template>
                    </Hot2>
                  </div>
            </div>
            <div class="mian-bottom">
              <div class="mian-bottom-left">
                <Hot1>
                  <template slot="title">
                    福州景区今日特色活动
                  </template>
                  <template >
                    <tr>
                      <td class="else">景区名称</td>
                      <td class="else">活动时间</td>
                      <td class="else">活动地点</td>
                      <td class="else">活动名称</td>
                    </tr>
                    <tr v-for="(item, index) in Activity">
                      <td>{{item.scenic_name}}</td>
                      <td class="time">
                        <span>
                           {{item.time}}
                        </span>
                      </td>
                      <td>{{item.place}}</td>
                      <td>{{item.activity_name}}</td>
                    </tr>

                  </template>
                </Hot1>
              </div>
              <div class="mian-bottom-center">
                <div class="fly"></div>
                <div class="hot">
                  <Hot1>
                    <template slot="title">
                      景区实时游客量
                    </template>
                    <template >
                      <tr>
                        <td class="else">序号</td>
                        <td class="else">景区名称</td>
                        <td class="else">实时客流量</td>
                        <td class="else">最大承载量(日)</td>
                      </tr>
                      <tr v-for="(item, index) in TouristNum">
                        <td><span>{{(index+1)}}</span></td>
                        <td>{{item.scenic_name}}</td>
                        <td class="bg">
                      <span>
                        {{item.tourist_num}}
                      </span>
                        </td>
                        <td>{{item.max_num}}</td>
                      </tr>

                    </template>
                  </Hot1>
                </div>
              </div>
              <div class="mian-bottom-right">
                <Hot1>
                <template slot="title">
                  景区停车场实时车流量
                </template>
                <template >
                  <tr>
                    <td class="else">序号</td>
                    <td class="else">景区名称</td>
                    <td class="else">实时车流量</td>
                    <td class="else">最大承载量(日)</td>
                  </tr>
                  <tr v-for="(item, index) in park">
                    <td><span>{{(index+1)}}</span></td>
                    <td>{{item.scenic_name}}</td>
                    <td class="bg">
                      <span>
                        {{item.car_num}}
                      </span>
                    </td>
                    <td>{{item.max_num}}</td>
                  </tr>

                </template>
              </Hot1>
              </div>
            </div>
      </div>
    </div>
</template>
<script>
  import Header from "../../components/Base/Header/Header.vue";
  import Hot1 from "../../components/FuzhouHot/hot1.vue";
  import Hot2 from "../../components/FuzhouHot/hot2.vue";
    export default {
        data() {
            return {
              resource: [
                {
                  "scenic_name": "三坊七巷",
                  "police": "37",
                  "firemen": "13",
                  "doctor": "4",
                  "guide": "8"
                },
                {
                  "scenic_name": "于山风景区",
                  "police": "6",
                  "firemen": "10",
                  "doctor": "2",
                  "guide": "6"
                },
                {
                  "scenic_name": "云顶景区",
                  "police": "8",
                  "firemen": "12",
                  "doctor": "3",
                  "guide": "4"
                },
                {
                  "scenic_name": "贵安欢乐世界",
                  "police": "35",
                  "firemen": "8",
                  "doctor": "3",
                  "guide": "5"
                },
                {
                  "scenic_name": "福州十八重溪",
                  "police": "6",
                  "firemen": "13",
                  "doctor": "4",
                  "guide": "8"
                },
                {
                  "scenic_name": "七叠温泉景区",
                  "police": "22",
                  "firemen": "5",
                  "doctor": "1",
                  "guide": "3"
                },
                {
                  "scenic_name": "罗源湾海洋世界",
                  "police": "27",
                  "firemen": "5",
                  "doctor": "8",
                  "guide": "6"
                },
                {
                  "scenic_name": "青云山景区",
                  "police": "16",
                  "firemen": "5",
                  "doctor": "6",
                  "guide": "8"
                },
                {
                  "scenic_name": "鼓山",
                  "police": "9",
                  "firemen": "6",
                  "doctor": "3",
                  "guide": "7"
                },
                {
                  "scenic_name": "冰心文学馆",
                  "police": "7",
                  "firemen": "4",
                  "doctor": "8",
                  "guide": "6"
                },
                {
                  "scenic_name": "石竹山",
                  "police": "11",
                  "firemen": "4",
                  "doctor": "5",
                  "guide": "8"
                },
                {
                  "scenic_name": "天门山景区",
                  "police": "16",
                  "firemen": "9",
                  "doctor": "8",
                  "guide": "6"
                },
                {
                  "scenic_name": "长汀江湿地公园",
                  "police": "9",
                  "firemen": "6",
                  "doctor": "5",
                  "guide": "8"
                }
              ],
              Activity: [
                {
                  "scenic_name": "七叠温泉景区",
                  "time": "09：00-12：00",
                  "place": "游客服务中心",
                  "activity_name": "庆毕业"
                },
                {
                  "scenic_name": "三坊七巷",
                  "time": "14：00-16：00",
                  "place": "南后街入口",
                  "activity_name": "拍抖音赢iPhoneX"
                },
                {
                  "scenic_name": "罗源湾海洋世界",
                  "time": "09：00-19：00",
                  "place": "游客服务中心",
                  "activity_name": "同游海洋馆"
                },
                {
                  "scenic_name": "贵安欢乐世界",
                  "time": "14：00-18：00",
                  "place": "雨林瀑布处",
                  "activity_name": "踏浪消暑狂欢节"
                },
                {
                  "scenic_name": "海坛岛风景区",
                  "time": "17：00-24：00",
                  "place": "海坛古城美食街",
                  "activity_name": "海洋盛宴"
                }
              ],
              park: [
                {
                "rank": "1",
                "scenic_name": "三坊七巷",
                "car_num": "468",
                "max_num": "550"
                },
                {
                  "rank": "2",
                  "scenic_name": "于山风景区",
                  "car_num": "365",
                  "max_num": "500"
                },
                {
                  "rank": "3",
                  "scenic_name": "云顶景区",
                  "car_num": "230",
                  "max_num": "450"
                },
                {
                  "rank": "4",
                  "scenic_name": "贵安欢乐世界",
                  "car_num": "269",
                  "max_num": "450"
                },
                {
                  "rank": "5",
                  "scenic_name": "福州十八重溪",
                  "car_num": "199",
                  "max_num": "280"
                }],
              TouristNum:[
            {
              "rank": "1",
              "scenic_name": "三坊七巷",
              "tourist_num": "34562",
              "max_num": "55000"
            },
            {
              "rank": "2",
              "scenic_name": "于山风景区",
              "tourist_num": "32300",
              "max_num": "50000"
            },
            {
              "rank": "3",
              "scenic_name": "云顶景区",
              "tourist_num": "23025",
              "max_num": "45000"
            },
            {
              "rank": "4",
              "scenic_name": "贵安欢乐世界",
              "tourist_num": "26938",
              "max_num": "45000"
            },
            {
              "rank": "5",
              "scenic_name": "福州十八重溪",
              "tourist_num": "19991",
              "max_num": "28000"
            }
          ]
            }
        },
      components:{
          Header,
          Hot1,
          Hot2
      }
    }
</script>
<style lang="less" scoped>
  .supervise {
    height: 100%;
  }


  @media screen and (min-width: 1600px) {
    .main {
      height: 100%;
      padding: 0 1%;
      box-sizing: border-box;
      background: url("../../../static/images/Base/bg.jpg") no-repeat;
      background-size: 100% 100%;
      .mian-top {
        height: 65%;
        display: flex;
        border-bottom: 1px solid #13bad2;
        .mian-top-left {
          height: 100%;
          flex: 2.7;
          box-sizing: border-box;
          padding: .5% 0 1% 0;
          .task {
            height: 100%;
            width: 98%;
            box-sizing: border-box;
            padding: 4% 6% 0 6%;
            color: #fff;
            background: #0c4d79;
            h2 {
              border-left:2px solid #13bad2;
              padding-left: 10px;
              letter-spacing: 1px;
              margin-bottom: 25px;
            }
            p {
              line-height: 36px;
              border-top: 1px solid #13bad2;
              padding-left: 15px;
            }
            a {
              color: #edf3b3;
              padding-right: 2px;
            }
          }
        }
        .mian-top-center {
          height: 100%;
          flex: 4.2;
          background: url("../../../static/images/JianGuan/tiaodu_map.jpg") no-repeat;
          background-size: 100% 100%;
          border-left: 1px solid #13bad2;
          border-right: 1px solid #13bad2;
          position: relative;
          .reader {
            position: absolute;
            bottom: 5%;
            left: 2%;
            width: 30%;
            p {
              width: 100%;
              color: #fff;
              box-sizing: border-box;
              padding-left: 10px;
              margin-bottom: 5px;
              &:nth-child(1) {
                font-size: 22px;
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
        }
        .mian-top-right {
          height: 100%;
          flex: 3.1;
        }
      }
      .mian-bottom {
        height: 35%;
        display: flex;
        .mian-bottom-left {
          height: 100%;
          flex: 2.7;
          border-right: 1px solid #13bad2;
        }
        .mian-bottom-center {
          height: 100%;
          flex: 4.2;
          display: flex;
          border-right: 1px solid #13bad2;
          .fly {
            flex: 1;
            height: 100%;
            background: url("../../../static/images/Base/tour_fly.jpg") no-repeat;
            background-size: 100% 100%;
          }
          .hot {
            flex: 3.5;
            height: 100%;
          }
        }
        .mian-bottom-right {
          height: 100%;
          flex: 3.1;
        }
      }
    }
  }

  @media screen and (max-width: 1580px) {
    .main {
      height: 100%;
      padding: 0 1%;
      box-sizing: border-box;
      background: url("../../../static/images/Base/bg.jpg") no-repeat;
      background-size: 100% 100%;
      .mian-top {
        height: 65%;
        display: flex;
        border-bottom: 1px solid #13bad2;
        .mian-top-left {
          height: 100%;
          flex: 2.7;
          box-sizing: border-box;
          padding: .5% 0 1% 0;
          .task {
            height: 100%;
            width: 98%;
            box-sizing: border-box;
            padding: 4% 6% 0 6%;
            color: #fff;
            background: #0c4d79;
            h2 {
              font-size: 20px;
              border-left:2px solid #13bad2;
              padding-left: 10px;
              letter-spacing: 1px;
              margin-bottom: 15px;
            }
            p {
              font-size: 12px;
              line-height: 25px;
              border-top: 1px solid #13bad2;
              padding-left: 15px;
            }
            a {
              color: #edf3b3;
              padding-right: 2px;
            }
          }
        }
        .mian-top-center {
          height: 100%;
          flex: 4.2;
          background: url("../../../static/images/JianGuan/tiaodu_map.jpg") no-repeat;
          background-size: 100% 100%;
          border-left: 1px solid #13bad2;
          border-right: 1px solid #13bad2;
          position: relative;
          .reader {
            position: absolute;
            bottom: 5%;
            left: 2%;
            width: 30%;
            p {
              width: 100%;
              color: #fff;
              box-sizing: border-box;
              padding-left: 10px;
              margin-bottom: 5px;
              font-size: 12px;
              &:nth-child(1) {
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
        }
        .mian-top-right {
          height: 100%;
          flex: 3.1;
        }
      }
      .mian-bottom {
        height: 35%;
        display: flex;
        .mian-bottom-left {
          height: 100%;
          flex: 2.7;
          border-right: 1px solid #13bad2;
        }
        .mian-bottom-center {
          height: 100%;
          flex: 4.2;
          display: flex;
          border-right: 1px solid #13bad2;
          .fly {
            flex: 1;
            height: 100%;
            background: url("../../../static/images/Base/tour_fly.jpg") no-repeat;
            background-size: 100% 100%;
          }
          .hot {
            flex: 3.5;
            height: 100%;
          }
        }
        .mian-bottom-right {
          height: 100%;
          flex: 3.1;
        }
      }
    }
  }

</style>
