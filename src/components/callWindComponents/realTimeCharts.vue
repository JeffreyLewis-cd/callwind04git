<!-- Created by JiangFan6 on 2018/4/30.-->

<template>
  <div class="realTimeCharts">
    <p>实时动态更新图表</p>
    <div id="myChartLine01" class="vueCharts"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: "realTimeCharts",
    data(){
      return {
        msg: 'realTimeCharts vue',
        seriesData: [
          {
            name: '官方数据',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '民间机构统计',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
    },
    mounted: function () {
      this.getMockData(); //生成模拟数据
      let init=setInterval(this.getMockData,2000)
    },
    components: {},
    methods: {
      //生成模拟数据
      getMockData(){
        var Mock = require('mockjs');
        var Random = Mock.Random;
        let population1 = Mock.mock({
          'population|6': [()=>Random.integer(1, 10000)]
        });
        let population2 = Mock.mock({
          'population|6': [()=>Random.integer(1, 10000)]
        });
//        console.log("mutations测试-03");
//        console.log(population1.population);
//        console.log(population2.population);
        this.seriesData[0].data=population1.population;
        this.seriesData[1].data=population2.population;
        this.drawBar("myChartLine01");
      },

      /* 绘制柱状图*/
      drawBar(id){
        // 基于准备好的dom，初始化echarts实例
        let chartBox=document.getElementById(id);
        if(chartBox){
          let myChart = this.$echarts.init(chartBox);
          // 绘制图表
          myChart.setOption({
            title: {
              text: '网络在线用户数量',
              subtext: '数据来自网络'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              right:10,
              data: [this.seriesData[0].name, this.seriesData[1].name]
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            yAxis: {
              type: 'category',
              data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: this.seriesData,
          });
        }

      }
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  @import "../../assets/scss/searchAndShow.scss";
</style>
