<!-- Created by JiangFan6 on 2018/5/5.-->

<template>
  <div class="es6SwitchData">
    <div class="es6SwitchData-btns">
      <router-link to="/" style="margin-right: 10px">
        <el-button type="primary" size="small" plain>
          返回搜索查询界面
        </el-button>
      </router-link>
      <el-button type="primary" size="small" plain @click="backToSearchAndShow">
        编程式返回
      </el-button>
      <div class="switchData-btns" v-for="(btnItem,index) in dataSource_btns" :key="index">
        <el-button type="primary" size="small" plain @click="switchData(index)" class="switchData-btn">
          {{btnItem.label}}
        </el-button>
      </div>

    </div>
    <div class="es6SwitchData-tableData">
      <div class="es6SD-tableData-table">
        <h2>{{active_index}}</h2>
        <el-table
          :data="dataSource[active_index].dataContent"
          border
          stripe
          style="width: 100%">
          <el-table-column v-for="(titleItem,index) in dataSource[active_index].dataTile" :key="index"
                           :prop="titleItem.field"
                           :label="titleItem.label"
                           align="center">
          </el-table-column>

          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: "es6SwitchData",
    data(){
      return {
        msg: 'hello vue',
        dataSource: [
          {
            dataTile: [
              {
                field: "date",
                label: "日期"
              },
              {
                field: "name",
                label: "姓名"
              },
              {
                field: "province",
                label: "省份"
              },
              {
                field: "city",
                label: "城市"
              },
              {
                field: "address",
                label: "地址"
              },
              {
                field: "zip",
                label: "邮编"
              },

            ],
            dataContent: [
              {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2017-05-02',
                name: '赵四',
                province: '黑龙江',
                city: '哈尔滨',
                address: '哈尔滨市黑河区大江路33号',
                zip: 845732
              }, {
                date: '2018-05-04',
                name: '贾玲',
                province: '北京',
                city: '朝阳区',
                address: '北京市朝阳区首都路123号',
                zip: 354125
              }, {
                date: '2018-05-01',
                name: '尼格买提',
                province: '新疆',
                city: '乌鲁木齐',
                address: '乌鲁木齐市八楼区刀郎路666号',
                zip: 214512
              }
            ]
          },
          {
            dataTile: [
              {
                field: "date",
                label: "日期"
              },
              {
                field: "name",
                label: "名称"
              },
              {
                field: "orderState",
                label: "订单状态"
              },
              {
                field: "length",
                label: "长度"
              },
              {
                field: "width",
                label: "宽度"
              },
              {
                field: "height",
                label: "高度"
              },
              {
                field: "weight",
                label: "重量"
              },
              {
                field: "volume",
                label: "体积"
              },
              {
                field: "remark",
                label: "备注"
              },

            ],
            dataContent: [
              {
                date: '2017-05-03',
                name: '立柜',
                orderState: '未付款',
                length: '120',
                width: '60',
                height: '150',
                weight: '66',
                volume: '145',
                remark: '无',
              },
              {
                date: '2017-08-03',
                name: '沙发',
                orderState: '已发货-圆通快递',
                length: '230',
                width: '130',
                height: '60',
                weight: '150',
                volume: '256',
                remark: '加急',
              },
            ]
          },
        ],
        selectedData_index: 0,
        dataSource_btns: [
          {
            label: "演员数据"
          },
          {
            label: "商品数据"
          },
        ]
      }
    },
    computed: {
      active_index(){
        return (this.selectedData_index) ? this.selectedData_index : 0;
      }
    },
    mounted: function () {
    },
    components: {},
    methods: {
      /* 返回查询页面*/
      backToSearchAndShow(){
//            this.$router.go(-1);
        this.$router.push({name: "callWindMainPage"})
      },

      /*切换源数据*/
      switchData(index){
        this.selectedData_index = index;
      },

      /*接收后台传来的映射关系--把状态字转换成汉字*/
      mapFormatter(){
        
      }
    }
  }
</script>

<style lang="scss" type="text/css">
  @import "../../assets/scss/es6SwitchData.scss";

</style>
