<template>
  <div ref="pie" style="height: 100vh; width: 100vw"></div>
</template>
<script>
import * as echarts from "echarts";
const color = ["#005aff", "pink", "#08b551","red", "#f0b551", "black"];
import "echarts-gl";
import { getPie3D, getParametricEquation } from "./chart.js";
export default {
  name: "cityGreenLand",
  components: {},
  data() {
    return {
      optionData: [
        {
          name: "营业厅",
          value: 10000,
          itemStyle: {
            color: "#22c4ff",
          },
        },
        // {
        //   name: "微信",
        //   value: 12126,
        //   itemStyle: {
        //     color: "#aaff00",
        //   },
        // },
        // {
        //   name: "支付宝",
        //   value: 16316,
        //   itemStyle: {
        //     color: "#ffaaff",
        //   },
        // },
           {
          name: "营业厅1",
          value: 17020,
          itemStyle: {
            color: "#22c4ff",
          },
        },
        // {
        //   name: "微信1",
        //   value: 12416,
        //   itemStyle: {
        //     color: "#aaff00",
        //   },
        // }
        // {
        //   name: "支付宝1",
        //   value: 16516,
        //   itemStyle: {
        //     color: "#80a0ff",
        //   },
        // }
      ],
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.setLabel();
      this.init();
    });
  },
  methods: {
    setLabel() {
      this.optionData.forEach((item, index) => {
        item.itemStyle = {
          color: color[index],
        };
        item.label = {
          normal: {
            show: true,
            color: color[index],
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
                color: "#fff",
                textShadowColor: "#1c90a6",
                textShadowOffsetX: 0,
                textShadowOffsetY: 2,
                textShadowBlur: 1,
              },
              d: {
                color: color[index],
                align: "left",
              },
            },
          },
        };
        item.labelLine = {
          normal: {
            lineStyle: {
              width: 2,
              color: color[index],
            },
          },
        };
      });
    },
    init() {
      //构建3d饼状图
      let myChart = echarts.init(this.$refs.pie);
      // 传入数据生成 option
      this.option = getPie3D(this.optionData,0, 400, 20, 20, 0.6);
      myChart.setOption(this.option);
      //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      this.option.series.push({
        name: "pie2d",
        type: "pie",
        labelLine: {
          length: 60,
          length2: 20,
        },
        label: {
          opacity: 1,
          fontSize: 13,
          lineHeight: 20,
        },
        startAngle: -40, //起始角度，支持范围[0, 360]。
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ["20%", "50%"],
        center: ["50%", "50%"],
        data: this.optionData,
        itemStyle: {
          opacity: 0,
        },
      });
      myChart.setOption(this.option);
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
  },
};
</script>
