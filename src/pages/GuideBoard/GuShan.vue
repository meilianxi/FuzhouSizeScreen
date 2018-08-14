<template>
  <div class="lin">
    <!--箭头-->
    <div class="arrow"></div>
    <!--安德曼-->

    <!--酒店-->
    <div class="hotel">
        福州锦颐酒店
    </div>
    <div class="one-six">
      1.6km
    </div>

    <div class="flower">
      芙蓉兴盛
    </div>
    <div class="eight">
      0.8km
    </div>

    <div class="tea">
      山人悟茶
    </div>
    <div class="three">
      0.3km
    </div>

    <!--滚动文字-->
    <!--<div class="move">
      <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
          <li v-for="item in newsList" v-text="item.title"></li>
        </ul>
      </vue-seamless-scroll>
    </div>-->

    <!--鼓山风景区-->
    <div class="linTemple">
      <h1>鼓山风景区</h1>
      <h2>GuShan scenery district</h2>
    </div>
    <!--当前人数-->
    <div class="nowNumber">
      <h3>当前鼓山游客量</h3>
      <div :class="{number: true,
          little: tempData.type ===0,
          middle: tempData.type ===1,
          more: tempData.type ===2
          }">
        <span>{{tempData.number[0]}}</span>
        <span>{{tempData.number[1]}}</span>
        <span>{{tempData.number[2]}}</span>
        <i>,</i>
        <span>{{tempData.number[3]}}</span>
        <span>{{tempData.number[4]}}</span>
        <span>{{tempData.number[5]}}</span>
        <i>人</i></div>
    </div>
    <!--2Km-->
    <div class="two">
      2Km
    </div>
  </div>

</template>

<script>
  import {GuShanNumber} from "../../api";
  export default {
    mounted() {
     this.getNumber();
     this.lun();
    },
    data() {
      return {
       /* newsList: [
          {
            'title': '兰轩村庄食坊:0571-12345678'
          },
          {
            'title': '杭州州法云安缦:0571-12345678'
          }
        ],*/
        tempData:{number: "001131", type: 0},
        timer: null
      }
    },
    props: [''],
    methods: {
      async getNumber() {
        let  personData = await GuShanNumber();
        if(!personData) {
          return false;
        }
        let personNum = personData.number;
        personNum += "";
        let len = personNum.length;
        len === 5 ? personNum = "0"+personNum : null;
        len === 4 ? personNum = "00"+personNum : null;
        len === 3 ? personNum = "000"+personNum : null;
        len === 2 ? personNum = "0000"+personNum : null;
        len === 1 ? personNum = "00000"+personNum : null;
        console.log(personNum);
        let personNumTemp = parseInt(personNum);
        if( personNumTemp < 1000){
          personData.type = 0;
        }else if(personNumTemp < 2000){
          personData.type = 1;
        }else {
          personData.type = 2;
        }
        personData.number = personNum;
        this.tempData =  personData;
      },
      lun() {
        this.timer=setInterval(this.getNumber, 3000);
      }
    },
    computed: {
      optionLeft () {
        return {
          direction: 2,
          limitMoveNum: 2
        }
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>

  .lin {
    height: 100%;
    position: relative;
    background: url("../../../static/images/GuideBoard/GuShan.jpg") no-repeat;
    background-size: 100% 100%;
  }
  @media screen and (min-width: 1281px) and (max-width:1600px) {
    .arrow {
      width: 8%;
      height: 25%;
      position: absolute;
      left: 69%;
      bottom: 6%;
      animation: arrowMove 2s infinite;
      background: url("../../../static/images/GuideBoard/arrow.png") no-repeat;
      background-size: 100% 100%;
    }
    .flower, .eight, .tea, .three, .hotel, .one-six {
      position: absolute;
      color: #fff;
    }
    .hotel {
      font-size: 45px;
      left: 2%;
      top: 20%;
    }
    .one-six {
      left: 10%;
      top: 29%;
      font-size: 40px;
    }
    .flower {
      font-size: 45px;
      left: 29%;
      top: 45%;
    }
    .eight {
      left: 32%;
      top: 54%;
      font-size: 40px;
    }
    .tea {
      left: 15%;
      top: 68%;
      font-size: 45px;
    }
    .three {
      left: 20%;
      top: 77%;
      font-size: 40px;
    }
    .linTemple {
      position: absolute;
      right: 3%;
      top: 5%;
      color: #fff;
      h1 {
        font-size: 80px;

      }
      h2 {
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 30px;
      }
    }
    .nowNumber {
      position: absolute;
      right: 0;
      top: 38%;
      color: #fff;
      width: 450px;
      h3 {
        position: absolute;
        padding-left: 5px;
        box-sizing: border-box;
        font-size: 30px;
        border-left: 4px solid #18aec4;
      }
      .number {
        margin-top: 50px;
        color: #000;
        span {
          display: inline-block;
          width: 50px;
          height: 70px;
          text-align: center;
          line-height: 80px;
          margin-right: 5px;
          font-size: 50px;
        }

        &.little {
          span {
            background: url("../../../static/images/GuideBoard/bg_green.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.middle {
          span {
            background: url("../../../static/images/GuideBoard/bg_yellow.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.more {
          span {
            background: url("../../../static/images/GuideBoard/bg_red.png") no-repeat;
            background-size: 100% 100%;
          }
        }

      }

      i {
        vertical-align: bottom;
        color: #fff;
        font-size: 40px;
      }
    }
    .two {
      position: absolute;
      right: 4%;
      bottom: 5%;
      color: #fff;
      font-size: 80px;
    }
    .seamless-warp2 {
      overflow: hidden;
      height: 90%;
      width: 100%;
      ul.item {
        width: 1150px;
        list-style: none;
        li {
          float: left;
          width: 100%;
          color: #fff;
          font-size: 70px;
          padding-left: 40px;
          margin: 0 12px 10px  0;
          &:nth-child(odd) {
            background: #60b634;
          }
          &:nth-child(even) {
            background: #f5c531;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1601px) and (max-width:1920px) {

    .arrow {
      width: 8%;
      height: 25%;
      position: absolute;
      left: 69%;
      bottom: 6%;
      animation: arrowMove 2s infinite;
      background: url("../../../static/images/GuideBoard/arrow.png") no-repeat;
      background-size: 100% 100%;
    }
    .flower, .eight, .tea, .three, .hotel, .one-six {
      position: absolute;
      color: #fff;
    }
    .hotel {
      font-size: 80px;
      left: 2%;
      top: 20%;
    }
    .one-six {
      left: 10%;
      top: 31%;
      font-size: 60px;
    }
    .flower {
      font-size: 80px;
      left: 29%;
      top: 45%;
    }
    .eight {
      left: 32%;
      top: 56%;
      font-size: 60px;
    }
    .tea {
      left: 15%;
      top: 68%;
      font-size: 80px;
    }
    .three {
      left: 20%;
      top: 79%;
      font-size: 60px;
    }
    .linTemple {
      position: absolute;
      right: 3%;
      top: 5%;
      color: #fff;
      h1 {
        font-size: 130px;

      }
      h2 {
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 60px;
      }
    }
    .nowNumber {
      position: absolute;
      right: 3%;
      top: 38%;
      color: #fff;
      width: 600px;
      h3 {
        position: absolute;
        padding-left: 5px;
        box-sizing: border-box;
        font-size: 30px;
        border-left: 4px solid #18aec4;
      }
      .number {
        margin-top: 50px;
        color: #000;
        span {
          display: inline-block;
          width: 70px;
          height: 90px;
          text-align: center;
          line-height: 100px;
          margin-right: 10px;
          font-size: 50px;
        }

        &.little {
          span {
            background: url("../../../static/images/GuideBoard/bg_green.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.middle {
          span {
            background: url("../../../static/images/GuideBoard/bg_yellow.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.more {
          span {
            background: url("../../../static/images/GuideBoard/bg_red.png") no-repeat;
            background-size: 100% 100%;
          }
        }

      }

      i {
        vertical-align: bottom;
        color: #fff;
        font-size: 40px;
      }
    }
    .two {
      position: absolute;
      right: 4%;
      bottom: 5%;
      color: #fff;
      font-size: 100px;
    }
    .seamless-warp2 {
      overflow: hidden;
      height: 90%;
      width: 100%;
      ul.item {
        width: 1150px;
        list-style: none;
        li {
          float: left;
          width: 100%;
          color: #fff;
          font-size: 70px;
          padding-left: 40px;
          margin: 0 12px 10px  0;
          &:nth-child(odd) {
            background: #60b634;
          }
          &:nth-child(even) {
            background: #f5c531;
          }
        }
      }
    }

  }

  @media screen and (max-width: 1280px) {
    .arrow {
      width: 8%;
      height: 25%;
      position: absolute;
      left: 69%;
      bottom: 6%;
      animation: arrowMove 2s infinite;
      background: url("../../../static/images/GuideBoard/arrow.png") no-repeat;
      background-size: 100% 100%;
    }
    .flower, .eight, .tea, .three, .hotel, .one-six {
      position: absolute;
      color: #fff;
    }
    .hotel {
      font-size: 45px;
      left: 2%;
      top: 20%;
    }
    .one-six {
      left: 10%;
      top: 29%;
      font-size: 40px;
    }
    .flower {
      font-size: 45px;
      left: 29%;
      top: 45%;
    }
    .eight {
      left: 32%;
      top: 54%;
      font-size: 40px;
    }
    .tea {
      left: 15%;
      top: 68%;
      font-size: 45px;
    }
    .three {
      left: 20%;
      top: 77%;
      font-size: 40px;
    }
    .linTemple {
      position: absolute;
      right: 3%;
      top: 5%;
      color: #fff;
      h1 {
        font-size: 80px;

      }
      h2 {
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 30px;
      }
    }
    .nowNumber {
      position: absolute;
      right: 0;
      top: 38%;
      color: #fff;
      width: 450px;
      h3 {
        position: absolute;
        padding-left: 5px;
        box-sizing: border-box;
        font-size: 30px;
        border-left: 4px solid #18aec4;
      }
      .number {
        margin-top: 50px;
        color: #000;
        span {
          display: inline-block;
          width: 50px;
          height: 70px;
          text-align: center;
          line-height: 80px;
          margin-right: 5px;
          font-size: 50px;
        }

        &.little {
          span {
            background: url("../../../static/images/GuideBoard/bg_green.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.middle {
          span {
            background: url("../../../static/images/GuideBoard/bg_yellow.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.more {
          span {
            background: url("../../../static/images/GuideBoard/bg_red.png") no-repeat;
            background-size: 100% 100%;
          }
        }

      }

      i {
        vertical-align: bottom;
        color: #fff;
        font-size: 40px;
      }
    }
    .two {
      position: absolute;
      right: 4%;
      bottom: 5%;
      color: #fff;
      font-size: 80px;
    }
    .seamless-warp2 {
      overflow: hidden;
      height: 90%;
      width: 100%;
      ul.item {
        width: 1150px;
        list-style: none;
        li {
          float: left;
          width: 100%;
          color: #fff;
          font-size: 70px;
          padding-left: 40px;
          margin: 0 12px 10px  0;
          &:nth-child(odd) {
            background: #60b634;
          }
          &:nth-child(even) {
            background: #f5c531;
          }
        }
      }
    }
  }



  .seamless-warp2 {
    overflow: hidden;
    height: 90%;
    width: 100%;
    ul.item {
      /*控制显示的宽度*/
      width: 950px;
      list-style: none;
      li {
        float: left;
        width: 100%;
        color: #fff;
        font-size: 40px;
        padding-left: 40px;
        margin: 0 12px 10px  0;
        &:nth-child(odd) {
          background: #60b634;
        }
        &:nth-child(even) {
          background: #f5c531;
        }
      }
    }
  }

  /*箭头动画*/
  @keyframes arrowMove {
    0% {
      bottom: 6%;
    }
    50% {
      bottom: 12%;
    }
    100% {
      bottom: 6%;
    }
  }
</style>
