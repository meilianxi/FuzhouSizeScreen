<template>
  <div class="recommend">
    <table class="recommend-bottom" cellspacing="0">
      <!--父组件渲染好的内容在此处插入-->
      <slot></slot>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {


      }
    },
  }
</script>
<style lang="less" scoped>
  .recommend {
    height: 100%;
  }
  .recommend-bottom {
    width: 100%;
    height: 100%;
  }
  tr {
    width: 100%;
  }
  tr:nth-child(even) {
    background: #084f94;
  }

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    td {
      width: 20%;
      text-align: center;
      color: #fff;
      font-size: 12px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      &.else {
        color: #4dc2fe;
      }
    }
    td span {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      background: #d37fca;
    }
  }

  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    td {
      width: 20%;
      text-align: center;
      color: #fff;
      font-size: 16px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      &.else {
        color: #4dc2fe;
      }
    }
    td span {
      display: inline-block;
      width: 22px;
      height: 22px;
      line-height: 22px;
      border-radius: 50%;
      background: #d37fca;
    }
  }

  td i {
    display: inline-block;
    background: #eb6100;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
