<template>
  <div id="Park">

  </div>
</template>
<script>

  export default {
    data() {
      return {}
    },
    props: [''],
    computed: {},
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('Rander'));
        myChart.setOption();
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #Park {
    height: 100%;
    transform: scale(.85);
  }

</style>
