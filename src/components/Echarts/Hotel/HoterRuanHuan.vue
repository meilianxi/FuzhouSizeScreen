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
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },

          series: [
            {
              name:'访问来源',
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
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
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
  }

</style>
