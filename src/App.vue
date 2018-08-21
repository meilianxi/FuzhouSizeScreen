<template>
  <div id="app">
    <div class="nav-header">
      <div class="nav-header-left">
        <Time></Time>
      </div>
      <div class="nav-header-center">
        <h1>福州市旅游大数据管理指挥系统</h1>
        <ul class="nav-header-center-nav">
            <li>
             <div @click = "isShow(0)"> 信息中心</div>
              <ul class="child-nav" v-show="one">
                <router-link to="/server" tag="li">服务大屏</router-link>
                <router-link to="/jian" tag="li">监管大屏</router-link>
              </ul>
            </li>
            <li>
              <div @click = "isShow(1)">
                <i>倩</i>
                景区
                <i>倩</i>
              </div>
              <ul class="child-nav" v-show="two">
                <router-link to="/three" tag="li">三坊七巷</router-link>
                <router-link to="/gu" tag="li">鼓山景区</router-link>
                <router-link to="/an" tag="li">贵安欢乐</router-link>
                <router-link to="/le" tag="li">机场小屏</router-link>
              </ul>
            </li>
            <li>
             <div  @click = "isShow(2)">
               <i>倩</i>
               交通
               <i>倩</i>
             </div>
              <ul class="child-nav" v-show="three">
                <router-link to="/fly" tag="li">机场一</router-link>
                <router-link to="/fly2" tag="li">机场二</router-link>
                <router-link to="/guide1" tag="li">鼓山路牌</router-link>
              </ul>
            </li>
            <li>
             <div  @click = "isShow(3)">
               <i>倩</i>
               宾馆
               <i>倩</i>
             </div>
              <ul class="child-nav" v-show="four">
                <router-link to="/hotel" tag="li">宾馆一</router-link>
              </ul>
            </li>
            <li>
              <div  @click = "isShow(4)">
                <i>倩</i>
                餐饮
                <i>倩</i>
              </div>
              <ul class="child-nav" v-show="five">
                <router-link to="/food" tag="li">醉得意</router-link>
              </ul>
            </li>
        </ul>
      </div>
      <div class="nav-header-right">
        <Air></Air>
      </div>
    </div>
    <div class="my-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Time from "./components/Base/Time/Time.vue";
  import Air from "./components/Base/Air/Air.vue";
export default {
  name: 'App',
  data() {
    return {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    }
  },
  methods: {
      isShow(index) {
        const isShow = ['one', 'two', 'three', 'four', 'five'];
        index = parseInt(index);
        for(let i = 0; i < isShow.length; i++) {
          if(i===index) {
            this[isShow[index]] = !this[isShow[index]];
          } else {
            this[isShow[i]] = false;
          }
        }
      }
  },
  components: {
    Time,
    Air
  }
}
</script>

<style lang="less">

  /*切换动画,不同路由页面切换动画,可取消*/
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all .5s linear;
  }
  .fadeIn-leave-active{
    transition: all .4s linear;
    opacity: 0;
  }
  /*修改轮播图分页点的样式,电梯小屏样式*/
  .swiper-pagination span.swiper-pagination-bullet {
    width: 150px;
    height: 15px;
    background: #fff;
    border-radius: 0;
  }
  /*激活时*/
  .swiper-pagination span.swiper-pagination-bullet-active {
    background: #42d3eb;
  }

  /*隐藏百度地图版权信息*/
  .anchorBL.BMap_noprint,.anchorBL {
    display:none
  }
  /*刚开始为了方便才写了这个
  ,不推荐使用,下次用初始化css文件代替*/
  *{
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .nav-header {
    height: 12%;
    background: url("../static/images/NavHeader/nav_header.jpg") no-repeat;
    background-size: 100% 100%;
    border-bottom: 1px solid #16A2BF;
    display: flex;
  }
  .nav-header-left, .nav-header-center, .nav-header-right {
    flex: 1;
    height: 100%;
  }

  @media screen and (max-width: 1280px) {
    .nav-header-left {
      display: flex;
      align-items: center;
      margin-top: 1.4%;
    }
    .nav-header-center {
      h1 {
        color: #fff;
        font-size: 20px;
        text-align: center;
        padding-top: 3px;
      }
      .nav-header-center-nav {
        display: flex;
        padding-top: 4px;
        justify-content: space-around;
        li {
          list-style: none;
          font-size: 13px;
          color: #fff;
          background: url("../static/images/NavHeader/nav_bg.jpg") no-repeat;
          background-size: 100% 100%;
          position: relative;
          i {
            font-size: 13px;
            color: transparent;
          }
          ul.child-nav {
            position: absolute;
            width: 100%;
            top: 20px;
            z-index: 9999;
            li {
              /* background: #000;*/
              line-height: 25px;
              text-align: center;
            }
          }
        }
      }
    }
    .nav-header-right {
      display: flex;
      align-items: center;
      /* margin-top: 1.4%;*/
      position: relative;
    }
  }
  @media screen and (min-width: 1281px) and (max-width: 1600px) {
    .nav-header-left {
      display: flex;
      align-items: center;
      margin-top: 1.4%;
    }
    .nav-header-center {
      h1 {
        color: #fff;
        font-size: 20px;
        text-align: center;
        padding-top: 3px;
      }
      .nav-header-center-nav {
        display: flex;
        padding-top: 2%;
        justify-content: space-around;
        li {
          list-style: none;
          font-size: 14px;
          color: #fff;
          background: url("../static/images/NavHeader/nav_bg.jpg") no-repeat;
          background-size: 100% 100%;
          position: relative;
          i {
            font-size: 14px;
            color: transparent;
          }
          ul.child-nav {
            position: absolute;
            width: 100%;
            top: 20px;
            z-index: 9999;
            li {
              /* background: #000;*/
              line-height: 25px;
              text-align: center;
            }
          }
        }
      }
    }
    .nav-header-right {
      display: flex;
      align-items: center;
      /* margin-top: 1.4%;*/
      position: relative;
    }
  }
  @media screen and (min-width: 1601px) {
    .nav-header-left {
      display: flex;
      align-items: center;
      margin-top: 1.4%;
    }
    .nav-header-center {
      h1 {
        color: #fff;
        font-size: 26px;
        text-align: center;
        padding-top: 3px;
      }
      .nav-header-center-nav {
        display: flex;
        padding-top: 2%;
        justify-content: space-around;
        li {
          list-style: none;
          font-size: 17px;
          color: #fff;
          background: url("../static/images/NavHeader/nav_bg.jpg") no-repeat;
          background-size: 100% 100%;
          position: relative;
          i {
            font-size: 17px;
            color: transparent;
          }
          ul.child-nav {
            position: absolute;
            width: 100%;
            top: 20px;
            z-index: 9999;
            li {
              /* background: #000;*/
              line-height: 25px;
              text-align: center;
            }
          }
        }
      }
    }
    .nav-header-right {
      display: flex;
      align-items: center;
      /* margin-top: 1.4%;*/
      position: relative;
    }
  }



  .my-view  {
    height: 88%;
  }

  /*双伪元素庆祝浮动,可用flex布局代替浮动*/
  .clearfix:before, .clearfix:after {
    content: '';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    zoom: 1;
  }

  /*显示省略号*/
  .ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
