<template>
  <div id="Zui">

  </div>
</template>
<script>

    export default {
        data() {
            return {}
        },
        props: [''],
      mounted() {
        this.drawLine();
      },
      methods: {
        drawLine(){
          let myChart = this.$echarts.init(document.getElementById('Zui'));
          myChart.setOption(
            {
              title: {
                text: '月收入(万元)',
                top: "10%",
                textStyle: {
                  fontSize: 16,
                  color: "#fff"
                }
              },
              xAxis: {
                data: ['01月', '02月', '03月', '04月', '05月', '06月'],
                /*坐标轴文字*/
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
                /*坐标轴颜色和宽度*/
                axisLine: {
                  lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                  }
                },
              },
              yAxis: {
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
                /*坐标轴颜色和宽度*/
                axisLine: {
                  lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                  }
                },
                },
              series: [{
                type: 'line',
                data: [600, 200, 400, 700, 500, 600],
                itemStyle:{
                  normal:{
                    color:'#ec403c'
                  }
                },
              }, {
                type: 'bar',
                data: [600, 200, 400, 700, 500, 600],
                itemStyle:{
                  normal:{
                    color:'#52b9ca'
                  }
                },
              }]
            }
          );

        }
      },
        components: {}
    }
</script>

<style lang="less" scoped>
#Zui {
  width: 100%;
  height: 100%;
}

</style>
