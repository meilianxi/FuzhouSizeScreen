<template>
  <div id="RuanHuan">

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
        let myChart = this.$echarts.init(document.getElementById('RuanHuan'));
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: '80%',
            textStyle:{
              fontSize: 12,
              color:'white'
            },
            data:['世纪','TIME','希尔','半岛','其他']
          },

          series: [
            {
              name:'世纪',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              /*设置border圆环之间就形成空隙*/
              itemStyle:{
                normal: {
                  borderWidth: 5,
                  borderColor: '#002354',
                }
              },
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:1335, name:'世纪'},
                {value:310, name:'TIME'},
                {value:234, name:'希尔'},
                {value:135, name:'半岛'},
                {value:248, name:'其他'}
              ],

            }
          ]
        };

        myChart.setOption(option);
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #RuanHuan {
    height: 100%;
    transform: scale(.8);
  }

</style>
