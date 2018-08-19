<template>
    <div id="Rander">

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
            myChart.setOption({
              title: {
//                text: '基础雷达图'
              },
              tooltip: {},
              /*legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
              },*/
              radar: {
                // shape: 'circle',
                name: {
                  textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                  }
                },
                indicator: [
                  { name: '免费车位', max: 6500},
                  { name: '排名高', max: 16000},
                  { name: '价格便宜', max: 30000},
                  { name: '免费的wift', max: 38000},
                  { name: '离景区近', max: 52000},
                  { name: '免费早餐', max: 25000}
                ]
              },
              series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                 /* {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）'
                  },*/
                  {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销（Actual Spending）'
                  }
                ]
              }]
            });
          }
        },
        components: {}
    }
</script>

<style lang="less" scoped>
    #Rander {
      height: 100%;
      transform: scale(.85);
    }

</style>
