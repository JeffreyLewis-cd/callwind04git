<!-- Created by JiangFan6 on 2018/4/30.-->

<template>
  <div class="searchAndShow">
    <!--从后台获取数据-->
    <div class="seAndSh-dataFromBackend">
      <img src="../../assets/img/cinghoo01.png" style="margin-right: 60px;">
      <img src="../../assets/img/zf.png" style="height: 36px;margin-right: 20px">
      <Input v-model="searchVal" style="width:40%">

      <span slot="prepend">征风山寨版</span>
      <Button slot="append" icon="search" @click.native="searchInMockPool"></Button>
      </Input>
    </div>

    <!--查询结果列表项数目-->
    <div class="seAndSh-filterInFront">
      <span>查询到&nbsp; </span>
      <span>{{mockData.length}}</span>
      <span> &nbsp;条数据</span>
    </div>

    <!-- 展示数据列表-->
    <div class="seAndSh-dataList">
      <div class="seAndSh-dataList-box">
        <div class="seAndSh-dataList-item" v-for="(mockItem, index) in mockData">
          <div class="seAndSh-dataList-item-title">
            <img src="../../assets/img/webpack.png" class="seAndSh-dataList-item-img">
            <p style="width:25%;" class="seAndSh-dataList-item-p">
              <span>被攻击用户名：</span><span style="font-weight: 500" v-html="mockItem.name"></span>
            </p>
            <p style="width:45%;" class="seAndSh-dataList-item-p">
              <span>被攻击地址：</span><span style="font-weight: 500" v-html="mockItem.address"></span>
            </p>
            <p style="width:20%;" class="seAndSh-dataList-item-p">
              <span>被攻击时间：</span><span style="font-weight: 500" v-html="mockItem.date"></span>
            </p>
          </div>
          <p class="seAndSh-dataList-item-content" v-html="mockItem.content"></p>

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import * as MUTATIONS from "../../store/mutations"

  export default{
    name: "searchAndShow",
    data(){
      return {
        msg: 'hello vue',
        searchVal: '',
        select3: 'day',
        hacker: '黑客常用手段',
        mockData: [
          {
            name: "66",
            date: "6666",
            content: "66",
            address: "666",
            imgURL: ""
          }
        ],
      }
    },
    mounted: function () {
      this.getMockData();
    },
    components: {},
    methods: {
      //生成模拟数据
      getMockData(){
        console.log("点击搜索-01");
        var Mock = require('mockjs');
        var Random = Mock.Random;
        let randomMockData = Mock.mock({
          'tableData|10': [{
            name: ()=>Random.cname(),
            address: ()=>Random.county(true),
            date: ()=>Random.date(),
            content: ()=>Random.cparagraph(),
            imgURL: ()=>Random.image(),
          }]
        });
        this.$store.commit(MUTATIONS.originMockDataUpdate,randomMockData.tableData)
        console.log("mutations测试-01");
        console.log(this.originMockData);
      },

      //查询搜索
      searchInMockPool(){
        let searchedData = [];
        let mockDataPoolTemp=this.originMockData;

        for (let key = 0; key < mockDataPoolTemp.length; key++) {
          let mockData = mockDataPoolTemp[key];
          let nameIndex = mockData.name.indexOf(this.searchVal);
          let addressIndex = mockData.address.indexOf(this.searchVal);
          let dateIndex = mockData.date.indexOf(this.searchVal);
          let contentIndex = mockData.content.indexOf(this.searchVal);

          let matchResult = (-1 !== nameIndex) ||   (-1 !== addressIndex) ||    (-1 !== dateIndex) ||    (-1 !== contentIndex);
          if (matchResult) {
            /*关键字高亮显示*/
            let newEle = "<span style='color:#fff;background-color:red'>" + this.searchVal + "</span>";
            let reg = "/" + this.searchVal + "/g";
            if (-1 !== nameIndex) {
              mockData.name = mockData.name.replace(eval(reg), newEle);
            }
            else if(-1 !== addressIndex){
              mockData.address = mockData.address.replace(eval(reg), newEle);
            }
            else if(-1 !== dateIndex){
              mockData.date = mockData.date.replace(eval(reg), newEle);
            }
            else if(-1 !== contentIndex){
              mockData.content = mockData.content.replace(eval(reg), newEle);
            }
            searchedData.unshift(mockDataPoolTemp[key]);
          }
          else {
          }
        }
        this.$set(this.$data, "mockData", searchedData);
        console.log(this.originMockData);
        console.log(mockDataPoolTemp);
      }
    },
    computed:{
      ...mapGetters({
        originMockData:"originMockData"
      })
    }
  }
</script>

<style scoped lang="scss" type="text/css">
  @import "../../assets/scss/searchAndShow.scss";

</style>
