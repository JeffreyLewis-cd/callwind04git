<!-- Created by JiangFan6 on 2018/4/30.-->

<template>
  <div class="searchAndShow">
    <!--从后台获取数据-->
    <div class="seAndSh-dataFromBackend">
      <img src="../../assets/img/cinghoo01.png" style="margin-right: 60px;">
      <img src="../../assets/img/zf.png" style="height: 36px;margin-right: 20px">
      <Input v-model="value13" style="width:40%">

      <span slot="prepend">征风山寨版</span>
      <Button slot="append" icon="search" @click.native="getMockData"></Button>
      </Input>
    </div>

    <!--查询结果中过滤-->
    <div class="seAndSh-filterInFront">
      <span>查询结果中过滤：</span>
      <RadioGroup v-model="hacker">
        <Radio label="黑客常用手段"></Radio>
        <Radio label="黑客攻击的方法"></Radio>
      </RadioGroup>
    </div>

   <!-- 展示数据列表-->
    <div class="seAndSh-dataList">
      <div class="seAndSh-dataList-box">
          <div class="seAndSh-dataList-item" v-for="(mockItem, index) in mockData">
            <div class="seAndSh-dataList-item-title">
              <img src="../../assets/img/webpack.png"  class="seAndSh-dataList-item-img">
              <p style="width:25%;"  class="seAndSh-dataList-item-p">
                <span>被攻击用户名：</span><span style="font-weight: 500">{{mockItem.name}}</span>
              </p>
              <p style="width:45%;" class="seAndSh-dataList-item-p">
                <span>被攻击地址：</span><span style="font-weight: 500">{{mockItem.address}}</span>
              </p>
              <p style="width:20%;" class="seAndSh-dataList-item-p">
                <span>被攻击时间：</span><span style="font-weight: 500">{{mockItem.date}}</span>
              </p>
            </div>
            <p class="seAndSh-dataList-item-content">{{mockItem.content}}</p>

          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: "searchAndShow",
    data(){
      return {
        msg: 'hello vue',
        value13: '',
        select3: 'day',
        hacker: '黑客常用手段',
        mockData: [
          {
            name: "66",
            date: "6666",
            content: "66",
            address: "666",
            imgURL:""
          }
        ],
      }
    },
    mounted: function () {

    },
    components: {},
    methods: {
      getMockData(){
        console.log("点击搜索-01");
        var Mock = require('mockjs');
        var Random = Mock.Random;
        let randomMockData = Mock.mock({
          'tableData|60': [{
            name: ()=>Random.cname(),
            address: ()=>Random.county(true),
            date: ()=>Random.date(),
            content: ()=>Random.cparagraph(),
            imgURL:()=>Random.image(),
          }]
        });
        console.log(randomMockData);
//        this.mockData=randomMockData;
        this.$set(this.$data,"mockData",randomMockData.tableData)
      }
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  @import "../../assets/scss/searchAndShow.scss";

</style>
