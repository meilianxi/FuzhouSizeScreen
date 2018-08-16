<template>
  <div id="app">

    <div class="my-nav">
      <div class="my-nav-left"
           @click="clickChange()"
      :class="{'my-rotate': isShow, 'my-rotate-off': !isShow}">
        <div class="my-nav-left-bg">
        </div>
      </div>
      <div class="my-nav-right">
        <transition name="fadeIn">
          <div class="my-nav-right-bg" v-show="isShow"></div>
        </transition>
        <ul class="menu" :class="{'click-menu': isShow}">
            <li>
              <router-link to="/an">
                小屏一
              </router-link>
            </li>
            <li>
              <router-link to="/le">
                小屏二
              </router-link>
            </li>
            <li>
              <router-link to="/fly">
                机场一
              </router-link>
            </li>
            <li>
              <router-link to="/fly2">
                机场二
              </router-link>
            </li>
            <li>
              <router-link to="/server">
                服务
              </router-link>
            </li>
            <li>
              <router-link to="/three">
                三坊
              </router-link>
            </li>
            <li>
              <router-link to="/gu">
                鼓楼
              </router-link>
            </li>
            <li>
              <router-link to="/jian">
                监管
              </router-link>
            </li>
            <li>
              <router-link to="/guide1">
                路牌
              </router-link>
            </li>
          </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    clickChange() {
        this.isShow = !this.isShow;
    }
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
  .my-nav {
    position: absolute;
    width: 60px;
    height: 100%;
    z-index: 99;
    .my-nav-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 60px;
      .my-nav-left-bg {
        width: 100%;
        height: 100%;
        background: url("../static/images/ico-navtrigger.png") no-repeat;
        background-size: 100% 100%;
      }
      background: rgba(192,192,192,.5);

      &.my-rotate {
        transition: all .3s;
        transform: rotate(90deg);
      }
      &.my-rotate-off {
        transition: all .3s;
        transform: rotate(0deg);
      }
    }
    .my-nav-right {
      width: 60px;
      margin-top: 61px;

      .my-nav-right-bg {
        position: absolute;
        width: 100%;
        height: 400px;
        /*color: #007aff;*/
        /*background: rgba(0,122,255,1);*/
      }
      .menu {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        &.click-menu {
          li {
            transition: all .5s;
            &:nth-child(1){
              transition-delay:0.1s;
            }
            &:nth-child(2){
              transition-delay:0.2s;
            }
            &:nth-child(3){
              transition-delay:0.3s;
            }
            &:nth-child(4){
              transition-delay:0.4s;
            }
            &:nth-child(5){
              transition-delay:0.5s;
            }
            &:nth-child(6){
              transition-delay:0.6s;
            }
            &:nth-child(7){
              transition-delay:0.7s;
            }
            &:nth-child(8){
              transition-delay:0.8s;
            }
            &:nth-child(9){
              transition-delay:0.9s;
            }
            transform: translate(0, 0);
          }

        }

        li {
          list-style: none;
          padding: 10px  0;
          transform: translate(-200px,0);
          a {
              text-decoration: none;
              color: #fff;
              padding: 0 10px;
              font-size: 14px;
            &.router-link-active {
              color: #007aff;
            }
          }
        }
      }
    }
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
