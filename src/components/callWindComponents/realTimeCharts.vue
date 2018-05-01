<!-- Created by JiangFan6 on 2018/4/30.-->

<template>
  <div class="realTimeCharts">
    <p>实时动态更新图表</p>
    <div id="myChartLine01" class="vueCharts"></div>
  </div>
</template>

<script>
    export default{
        name: "realTimeCharts",
        data(){
            return {
                msg: 'realTimeCharts vue'
            }
        },
        mounted: function () {
          this.drawBar("myChartLine01");
        },
        components: {},
        methods: {
          drawBar(id){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(id));
            // 绘制图表
            myChart.setOption({
              title: {
                text: '世界人口总量',
                subtext: '数据来自网络'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              legend: {
                data: ['2011年', '2012年']
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
                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
              },
              series: [
                {
                  name: '2011年',
                  type: 'bar',
                  data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                  name: '2012年',
                  type: 'bar',
                  data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
              ]
            });
          }
        }
    }
</script>

<style scoped lang="scss" type="text/css">
  @import "../../assets/scss/searchAndShow.scss";
</style>
