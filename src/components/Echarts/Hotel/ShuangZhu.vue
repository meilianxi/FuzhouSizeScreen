<template>
  <div id="shuangZhu">

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
        let myChart = this.$echarts.init(document.getElementById('shuangZhu'));
        let option = {
          color: ['#3398DB', '#D53A35'],
          title: {
            text: '停车位(个)',
            textStyle: {
              color: '#fff',
              fontSize: "14"
            }
          },
          legend: {
            data: ['已使用', '未使用'],
            textStyle: {
              color: '#fff',
              fontSize: "14"
            }
          },
          xAxis: [{
            type: 'category',
            data: ['6.29', '6.30', '7.1', '7.2', '7.3', '7.4', '7.5'],
            axisPointer: {
              type: 'shadow'
            },
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
          }],
          yAxis: [{
            type: 'value',
            name: '已使用',
            min: 0,
            max: 10000,
            interval: 2500,
            /*坐标轴文字*/
            axisLabel: {
              show: true,
              formatter: '{value}',
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
            {
              type: 'value',
              name: '未使用',
              min: 0,
              max: 10000,
              interval: 2500,
              /*坐标轴文字*/
              axisLabel: {
                show: true,
                formatter: '{value}',
                textStyle: {
                  color: 'transparent'
                }
              },
              /*坐标轴颜色和宽度*/
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: 'transparent',//左边线的颜色
                }
              },
            }
          ],
          series: [{
            name: '已使用',
            type: 'bar',
            data: [2000, 4500, 6000, 9000, 8000, 5000],
            itemStyle:{
              normal:{
                color:'#42cacb'
              }
            },
          },
            {
              name: '未使用',
              type: 'bar',
              yAxisIndex: 1,
              data: [1000, 3500,2500, 2000, 1000, 2000],
              itemStyle:{
                normal:{
                  color:'#fa8888'
                }
              },
            }
          ]
        };
        myChart.setOption(
          option
        );
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #shuangZhu {
    width: 100%;
    height: 100%;
    transform: scale(.9);
  }

</style>
