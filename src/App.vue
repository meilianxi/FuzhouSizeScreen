<template>
  <div id="app">

    <ul class="myTestNav">
      <li>
        <router-link to="/">
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
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

  /*左侧导航栏*/
  .myTestNav {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    z-index: 99;
    background: rgba(0,0,0,.35);
  li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #000;
  a {
    color: #fff;
    text-decoration: none;
    }
      }
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
    /*width: 1600px;
    height: 900px;*/
    /*width: 1440px;
    height: 900px;*/
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
