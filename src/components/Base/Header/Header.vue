<template>
  <div class="myHeader">
    <div class="header-left">
      <Time class="time"></Time>
    </div>
    <div class="header-center">
      {{title}}
    </div>
    <div class="header-right">
      <Air class="air"></Air>
    </div>
  </div>
</template>
<script>
  import Time from "../Time/Time.vue";
  import Air from "../Air/Air.vue";
  export default {
    data() {
      return {}
    },
    props: {
      title: String
    },
    computed: {},
    methods: {},
    components: {
      Time,
      Air,
    }
  }
</script>

<style lang="less" scoped>
  .myHeader {
    height: 12%;
    background: url("../../../../static/images/Header/bg.jpg");
    background-size: 100% 100%;
    border-bottom: 1px solid #16A2BF;
    display: flex;
  }
  .header-left, .header-center, .header-right {
    flex: 1;
    height: 100%;
  }
  .header-left {
    /* background: #666;*/
    display: flex;
    align-items: center;
    .time {
      margin-top: 7%;
    }
  }

  @media screen and (max-width: 1024px) {
    .header-center {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1025px) {
    .header-center {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 20px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    .air {
      margin-top: 5%;

    }
  }
</style>
