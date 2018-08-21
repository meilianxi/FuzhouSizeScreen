<template>
  <div class="myAir">
    <span>{{highTemp}}/{{lowTemp}}℃</span>
    <span>{{weather}}</span>
    <span> 空气质量实时指数</span>
    <span class="last">{{rank}}优</span>
  </div>
</template>

<script>
  import {getWeather} from "../../../api";
  export default {
    name: "Air",
    created(){
      this.myGetWeather();
    },
    data() {
      return {
        highTemp: 19,
        lowTemp: 14,
        weather: "",
        rank: ""
      }
    },
    methods:{
      async myGetWeather() {
        let data= await getWeather();
        let weatherData=data.forecast[0];
        this.highTemp = weatherData.high.slice(3,5);
        this.lowTemp = weatherData.low.slice(3,5);
        this.weather = weatherData.type;
        this.rank = parseInt(weatherData.high.slice(3,5)) + 15;
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 1024px) {
    .myAir {
      position: absolute;
      top: 46%;
    }
    span {
      font-size: 14px;
      margin-right: 8px;
      color: #fff;
    }
    .last {
      display: inline-block;
      text-align: center;
      width: 80px;
      height: 35px;
      line-height: 35px;
      border: 1px solid green;
      border-radius: 5px;
      color: green;
      margin-left: 5px;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1600px) {
    .myAir {
      position: absolute;
      right: 5%;
      top: 46%;
    }
    span {
      font-size: 14px;
      margin-right: 8px;
      color: #fff;
    }
    .last {
      display: inline-block;
      text-align: center;
      width: 80px;
      height: 35px;
      line-height: 35px;
      border: 1px solid green;
      border-radius: 5px;
      color: green;
      margin-left: 5px;
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1601px) {
    .myAir {
      position: absolute;
      right: 5%;
      top: 52%;
    }
    span {
      font-size: 16px;
      margin-right: 12px;
      color: #fff;
    }
    .last {
      display: inline-block;
      text-align: center;
      width: 80px;
      height: 35px;
      line-height: 35px;
      border: 1px solid green;
      border-radius: 5px;
      color: green;
      margin-left: 5px;
      font-size: 20px;
    }
  }

</style>
