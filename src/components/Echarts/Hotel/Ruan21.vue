<template>
  <div id="Ruan21">

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
        let myChart = this.$echarts.init(document.getElementById('Ruan21'));
        let option = {
          title: {
            text: '72%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#0580f2',
              fontSize: '40'
            }
          },
          color: ['rgba(176, 212, 251, 1)'],
          legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 80,
              name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#00cefc' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#367bec' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              name: '02',
              value: 20
            }]
          }]
        };
        myChart.setOption(option);
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #Ruan21 {
    width: 100%;
    height: 100%;
    transform: scale(.4);
  }

</style>
