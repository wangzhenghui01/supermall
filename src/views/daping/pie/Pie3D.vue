<template>
  <div class="pie" ref="pie">
  </div>
</template>

<script>
  import 'echarts-gl'
  import { getPie3D,getParametricEquation} from "./chart.js";
    export default {
      name: "Pie3D",
      data(){
        return {
          interval:{},
        }
      },
      props:{
        optionData:{
          type: Array,
          default:[
            {
              name: "饼图",
              value: 10000
            }
          ]
        },
        adjustmentShape:{
          type:Array,
          //0:中心空白占比，1：调整大小，2：调整倾斜度，3：厚度，4：随意
          default: [0,450,30,22,0]
        },
        color:{
          type:Array,
          default:["rgba(0,90,255,1)", "rgba(240,72,255,1)", "#6D39F6","#6ACDE4", "#f0b551", "#052B78"]
        }
      },
      mounted(){
        this.setLabel()
        this.createTopPie()
        this.interval = setInterval(() => {//開始运行
          this.rotationShow()
        },2000)//设定定时器，循环运行
      },
      methods:{
        //各饼图组件
        setLabel() {

          this.optionData.forEach((item, index) => {
            item.itemStyle = {
              color: this.color[index],
            };
            item.label = {
              normal: {
                show: false,
                color: 'rgba(255,255,255,0)',
                formatter: ["{b|{b}}", "{c|{c}}{b|}", "{d|{d}%}"].join("\n"), // 用\n来换行
                rich: {
                  b: {
                    color: this.color[index],
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
                show:false,
                lineStyle: {
                  width: 2,
                  color: 'rgba(255,255,255,.1)',
                },
              },
            };
            if (item.name == '微信'){
              item.label.normal.show = true
              item.labelLine.normal.show = true
            }
          });
        },
        //轮播显示labe和labelLine
        rotationShow() {
          this.createTopPie()
          let optionIndex = 0
          this.optionData.forEach((item, index) => {
            console.log(index)
            if (item.label.normal.show) {
              item.label.normal.show = false
              if ((index+1) != this.optionData.length) {
                optionIndex = index+1
              }
            }
          });
          this.optionData[optionIndex].label.normal.show = true
          this.optionData[optionIndex].labelLine.normal.show = true
        },
        createTopPie(){
          //构建3d饼状图
          let myChart = this.$echarts.init(this.$refs.pie);
          // 传入数据生成 option
          this.option4 = getPie3D(this.optionData,this.adjustmentShape[0], this.adjustmentShape[1], this.adjustmentShape[2], this.adjustmentShape[3], this.adjustmentShape[4]);
          myChart.setOption(this.option4);
          //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
          this.option4.series.push({
            name: "pie2d",
            type: "pie",
            labelLine: {
              length: 20,
              length2: 50,
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
        }
      }
    }
</script>

<style scoped>
  .pie{
    height: 100%;
    width: 100%;
  }
</style>
