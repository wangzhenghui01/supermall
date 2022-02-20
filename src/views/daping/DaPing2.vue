<template>
  <div>
    <body>
    <!--页面头部-->
    <header>
      <h1>数据可视化-ECharts</h1>
      <div class="showNowTime">
        {{nextTime}}</div>
    </header>
    <!--页面主题部分-->
    <section class="mainbox">
      <!--左侧部分-->
      <div class="column">
        <div class="panel bar">
            <div class="slider-bar-left">
              <div class="panel-header">
                <div class="left-tittle">
                  <div class="bar-symbol"></div>
                  <div class="usually-tittle">用气量统计</div>
                </div>
              </div>
              <div class="panel-body">
                <div class="panel-body-right-item item1">
                  <slider_bar></slider_bar>
                </div>
                <div class="panel-body-right-item item2">
                  <slider_bar></slider_bar>
                </div>
                <div class="panel-body-right-item item3">
                  <slider_bar></slider_bar>
                </div>
              </div>
            </div>
            <div class="use-gas-right">
              <div class="panel-header">
                <div class="left-tittle">
                  <div class="bar-symbol"></div>
                  <div class="usually-tittle">非居民用户用气量排行</div>
                </div>
              </div>
              <div class="panel-body"></div>
            </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <div class="panel-header">
            <div class="right-button">
              <date_button @year-click="leftDateButton2Year"
                           @month-click="leftDateButton2Month"
                           @day-click="leftDateButton2Day"></date_button>
            </div>
          </div>
          <div class="chart" ref="leftCart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <div class="slider-bar-left">
            <div class="panel-header">
              <div class="left-tittle">
                <div class="bar-symbol"></div>
                <div class="usually-tittle">用户用气量分类</div>
              </div>
            </div>
            <div class="panel-body">
              <div class="panel-body-right-item item2-1">
                <slider_bar></slider_bar>
              </div>
              <div class="panel-body-right-item item2-2">
                <div class="left">
                  <slider_bar slider_text="壁挂炉用户用气量"></slider_bar>
                </div>
                <div class="right">
                  <slider_bar slider_text="单户平均气量"></slider_bar>
                </div>
              </div>
              <div class="panel-body-right-item item2-3">
                <div class="left">
                  <slider_bar slider_text="非壁挂炉用户用气"></slider_bar>
                </div>
                <div class="right">
                  <slider_bar slider_text="单户平均气量"></slider_bar>
                </div>
              </div>
            </div>
          </div>
          <div class="use-gas-right">
            <div class="panel-header">
              <div class="right-button right-button-left3">
                <date_button></date_button>
              </div>
            </div>
            <div class="panel-body"></div>
          </div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <!--中间部分-->
      <div class="column">
        <!--数字模块-->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>123456</li>
              <li>12345678</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <!--地图模块-->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart" ref="myMap"></div>
        </div>
      </div>
      <!--右侧部分-->
      <div class="column">
        <div class="panel bar">
          <div class="slider-bar-left">
            <div class="panel-header">
              <div class="left-tittle">
                <div class="bar-symbol"></div>
                <div class="usually-tittle">结算方式1</div>
              </div>
            </div>
            <div class="panel-body panel-body-left2-1">
              <data_area></data_area>
              <div class="condition">
                <my_select placeholder="总公司"></my_select>
              </div>
              <div class="total-data">
                <total_data sign="用户管理数"></total_data>
              </div>
            </div>
          </div>
          <div class="use-gas-right">
            <div class="panel-header">

            </div>
            <div class="panel-body panel-body-left2-1">
            </div>
          </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <div class="slider-bar-left">
            <div class="panel-header">
              <div class="left-tittle">
                <div class="bar-symbol"></div>
                <div class="usually-tittle">结算方式</div>
              </div>
            </div>
            <div class="panel-body panel-body-left2-1">
              <bottom_pie><pie_2d></pie_2d></bottom_pie>
            </div>
          </div>
          <div class="use-gas-right">
            <div class="panel-header">

            </div>
            <div class="panel-body panel-body-left2-1">
              <business_information></business_information>
            </div>
          </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <div class="slider-bar-left">
            <div class="panel-header">
              <div class="left-tittle">
                <div class="bar-symbol"></div>
                <div class="usually-tittle">表类型</div>
              </div>
            </div>
            <div class="panel-body panel-body-left2-1">
              <bottom_pie>
                <pie_3d :option-data="optionData" :adjustment-shape="adjustmentShape"></pie_3d>
              </bottom_pie>
            </div>
          </div>
          <div class="use-gas-right">
            <div class="panel-header">
              <div class="left-tittle">
                <div class="bar-symbol"></div>
                <div class="usually-tittle">非居民用户分类</div>
              </div>
              <div class="right-button right-button-left3">
                <date_button></date_button>
              </div>
            </div>
            <div class="panel-body panel-body-left2-1">
              <bottom_pie>
                <pie_3d :option-data="optionData" :adjustment-shape="adjustmentShape1" :color="color"></pie_3d>
              </bottom_pie>
            </div>
          </div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
    </body>
  </div>
</template>

<script>
  import 'echarts-gl'
  import HuaDong from '../daping/common/HuaDong'
  import DateButton from '../daping/common/DateButton'
  import BottomPie from './pie/BottomPie'
  import Pie3D from './pie/Pie3D'
  import Pie2D from './pie/Pie2D'
  import DataArea from './common/DataArea'
  import MySelect from './common/MySelect'
  import TotalData from './common/TotalData'
  import BusinessInformationPie from './pie/BusinessInformationPie'
  import { getPie3D, getParametricEquation } from "./pie/chart.js";
  export default {
    name: "Daping2",
    components:{
      slider_bar:HuaDong,
      date_button:DateButton,
      bottom_pie:BottomPie,
      pie_3d:Pie3D,
      pie_2d:Pie2D,
      data_area:DataArea,
      my_select:MySelect,
      business_information:BusinessInformationPie,
      total_data:TotalData
    },
    data() {
      return {
        list: [],
        nextTime:'',
        interval:{},
        optionBase:[{
          name: "营业厅",
          value: 10000,
          itemStyle:{
            color:'rgba(20,80,152,.4)'
          }
        }],
        optionBase1:[{
          name: "营业厅",
          value: 10000,
          itemStyle:{
            color:'rgba(20,80,152,.2)'
          }
        }],
        optionData: [
          {
            name: "营业厅",
            value: 10000,
            labelLine:{
              show:true,
              lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.1)',
              },
            }
          },
          {
            name: "微信",
            value: 76126,
            labelLine:{
              show:false
            }
          },
          {
            name: "支付宝",
            value: 56316,
            labelLine:{
              show:false
            }
          },
          {
            name: "微信1",
            value: 73416,
            labelLine:{
              show:false
            }
          },
          {
            name: "支付宝1",
            value: 83516,
            labelLine:{
              show:false
            }
          }
        ],
        adjustmentShape:[.0,450,30,25,0],
        adjustmentShape1:[.8,250,25,22,0],
        color:["rgba(0,90,255,1)", "rgba(240,72,255,1)", "rgba(109,57,246)","rgba(240,181,81,1)","rgba(106,205,228,1)",  "#052B78"]
      }
    },
    created () {
      this.shouTime()
    },
    mounted(){
      this.setLabel()
      this.bbbbb()
      this.aaaaaa()
      this.cccccc()
    },
    methods: {
      //时间显示
      shouTime() {
        this.interval = setInterval(() => {//開始运行
          let dt = new Date();
          let y = dt.getFullYear();
          let mt = dt.getMonth() + 1;
          let day = dt.getDate();
          let h = dt.getHours(); //获取时
          let m = dt.getMinutes(); //获取分
          let s = dt.getSeconds(); //获取秒
          this.nextTime =
            "当前时间：" +
            y +
            "年" +
            mt +
            "月" +
            day +
            "-" +
            h +
            "时" +
            m +
            "分" +
            s +
            "秒";
          console.log(this.nextTime)
        },1000)//设定定时器，循环运行
      },
      //销售笔数/销售金额切换事件
      leftDateButton2Year(){
        console.log("year")
      },
      leftDateButton2Month(){
        console.log("month")
      },
      leftDateButton2Day(){
        console.log("day")
      },

      //各饼图组件
      setLabel() {
        const color = ["rgba(0,90,255,.8)", "rgba(240,72,255,.8)", "#6D39F6","#6ACDE4", "#f0b551", "#052B78"];
        this.optionData.forEach((item, index) => {
          item.itemStyle = {
            color: color[index],
          };
          item.label = {
            normal: {
              show: true,
              color: 'rgba(255,255,255,0)',
              formatter: ["{b|{b}}", "{c|{c}}{b|}", "{d|{d}%}"].join("\n"), // 用\n来换行
              rich: {
                b: {
                  color: color[index],
                  lineHeight: 16,
                  fontSize: 14,
                  align: "left",
                },
                c: {
                  fontSize: 14,
                  color: 'rgba(255,255,255,0)',
                  textShadowColor: "#1c90a6",
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 2,
                  textShadowBlur: 1,
                },
                d: {
                  color: 'rgba(255,255,255,0)',
                  align: "left",
                },
              },
            },
          };
          item.labelLine = {
            normal: {
              lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.1)',
              },
            },
          };
        });
      },
      bbbbb(){
        //构建3d饼状图
        let myChart = this.$echarts.init(this.$refs.pie4d);
        // 传入数据生成 option
        this.option4 = getPie3D(this.optionData,0, 320, 30, 40, 0);
        myChart.setOption(this.option4);
        //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
        this.option4.series.push({
          name: "pie2d",
          type: "pie",
          labelLine: {
            length: 20,
            length2: 80,
            borderColor:'#3D50A0'
          },
          label: {
            opacity: 1,
            fontSize: 13,
            lineHeight: 25,
          },
          startAngle: -40, //起始角度，支持范围[0, 360]。
          clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
          radius: ["20%", "50%"],
          center: ["50%", "37%"],
          data: this.optionData,
          itemStyle: {
            opacity: 0,
          },
        });
        myChart.setOption(this.option4);
        this.bindListen(myChart);
      },
      bindListen(myChart) {
        // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
        let that = this;
        let selectedIndex = "";
        let hoveredIndex = "";
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        // 监听点击事件，实现选中效果（单选）
        myChart.on("click", function (params) {
          console.log(params);
          console.log(that.option.series);
        });
        // 监听 mouseover，近似实现高亮（放大）效果
        myChart.on("mouseover", function (params) {
          // 准备重新渲染扇形所需的参数
          let isSelected;
          let isHovered;
          let startRatio;
          let endRatio;
          let k;
          // 如果触发 mouseover 的扇形当前已高亮，则不做操作
          if (hoveredIndex === params.seriesIndex) {
            return;
            // 否则进行高亮及必要的取消高亮操作
          } else {
            // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
            if (hoveredIndex !== "") {
              // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
              isSelected = that.option.series[hoveredIndex].pieStatus.selected;
              isHovered = false;
              startRatio = that.option.series[hoveredIndex].pieData.startRatio;
              endRatio = that.option.series[hoveredIndex].pieData.endRatio;
              k = that.option.series[hoveredIndex].pieStatus.k;
              // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
              that.option.series[hoveredIndex].parametricEquation =
                getParametricEquation(
                  startRatio,
                  endRatio,
                  isSelected,
                  isHovered,
                  k,
                  that.option.series[hoveredIndex].pieData.value
                );
              that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
              // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
              hoveredIndex = "";
            }
            // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
              isSelected =
                that.option.series[params.seriesIndex].pieStatus.selected;
              isHovered = true;
              startRatio =
                that.option.series[params.seriesIndex].pieData.startRatio;
              endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
              k = that.option.series[params.seriesIndex].pieStatus.k;
              // 对当前点击的扇形，执行高亮操作（对 option 更新）
              that.option.series[params.seriesIndex].parametricEquation =getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                that.option.series[params.seriesIndex].pieData.value + 5
              );
              that.option.series[params.seriesIndex].pieStatus.hovered =
                isHovered;
              // 记录上次高亮的扇形对应的系列号 seriesIndex
              hoveredIndex = params.seriesIndex;
            }
            // 使用更新后的 option，渲染图表
            myChart.setOption(that.option);
          }
        });
        // 修正取消高亮失败的 bug
        myChart.on("globalout", function () {
          // 准备重新渲染扇形所需的参数
          let isSelected;
          let isHovered;
          let startRatio;
          let endRatio;
          let k;
          if (hoveredIndex !== "") {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = that.option.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            k = that.option.series[hoveredIndex].pieStatus.k;
            startRatio = that.option.series[hoveredIndex].pieData.startRatio;
            endRatio = that.option.series[hoveredIndex].pieData.endRatio;
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            that.option.series[hoveredIndex].parametricEquation =getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              that.option.series[hoveredIndex].pieData.value
            );
            that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = "";
          }
          // 使用更新后的 option，渲染图表
          myChart.setOption(that.option);
        });
      },
      aaaaaa(){
        //构建3d饼状图
        let myChart = this.$echarts.init(this.$refs.pie3d);
        // 传入数据生成 option
        this.option3 = getPie3D(this.optionBase,0, 200, 20, 5, 0);
        myChart.setOption(this.option3);
        //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
        myChart.setOption(this.option3);
        // this.bindListen(myChart);
      },
      cccccc(){
        //构建3d饼状图
        let myChart = this.$echarts.init(this.$refs.pie2d);
        // 传入数据生成 option
        this.option2 = getPie3D(this.optionBase1,0, 180, 20, 0.2, 0);
        myChart.setOption(this.option2);
        //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
        myChart.setOption(this.option2);
        // this.bindListen(myChart);
      },
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/index1.less";
</style>
