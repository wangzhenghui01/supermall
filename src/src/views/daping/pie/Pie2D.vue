<template>
  <div class="pie2d" ref="pie2d">
  </div>
</template>

<script>
    export default {
      name: "Pie2D",
      props:{
        center_centerData:{
          type:Array,
          default:["50%", "35%"]
        },
        center_radiusData:{
          type:Array,
          default: ["40%", "52%"]
        },
        center_color:{
          type:Array,
          default: [
            "#50c6dd",
            "#DE2BF1",
            "#9525F6",
            "#7757F3",
            "#474CDA",
            "#3269EE",
          ],
        },
        outer_centerData:{
          type:Array,
          default:["50%", "35%"]
        },
        outer_radiusData:{
          type:Array,
          default: ["57%", "55%"]
        },
        outer_color:{
          type:Array,
          default: [
            "#F96D67",
            "rgba(80,198,221,0)",
          ],
        },
        inner_centerData:{
          type:Array,
          default:["50%", "35%"]
        },
        outer_radiusData:{
          type:Array,
          default: ["57%", "55%"]
        },
        outer_color:{
          type:Array,
          default: [
            "#F96D67",
            "rgba(80,198,221,0)",
          ],
        }
      },
      mounted(){
        this.myLeftChart3bak()
      },
      methods:{
        myLeftChart3bak(){
          let myChart = this.$echarts.init(this.$refs.pie2d)
          let option = {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}: {c} ({d}%)",
              position: function(p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
              }
            },
            series: [
              {
                name: "中间",
                type: "pie",
                center: this.center_centerData,
                radius: this.center_radiusData,//第一个元素调整中心面积大小，
                color: [
                  "#50c6dd",
                  "#DE2BF1",
                  "#9525F6",
                  "#7757F3",
                  "#474CDA",
                  "#3269EE",

                ],
                label: {
                  show: true,
                  color: '#fff',
                },
                labelLine: {
                  show: true,
                  length:16,
                  length2:60,
                  minTurnAngle:120,
                  lineStyle:{
                    width:2,
                    type:'dotted',
                    dashOffset:30,
                    cap:'round',
                    join:'bevel'
                  }
                },
                data: [
                  { value: 3.2,
                    name: "微信",
                  },
                  { value: 3.2, name: "支付宝" },
                  { value: 1, name: "现金" },
                  { value: 1, name: "转账" },
                  { value: 1, name: "pos" },
                  { value: 0.6, name: "微信网厅" }
                ]
              },
              {
                name: "外层",
                type: "pie",
                center: ["50%", "35%"],
                radius: ["57%", "55%"],//第一个元素调整中心面积大小，
                color: [
                  "#F96D67",
                  "rgba(80,198,221,0)",
                ],
                label: {
                  show: true,
                  color: '#fff'
                },
                labelLine: { show: true },
                data: [
                  {
                    value: 6.4,
                    name: "扫码" ,

                  },
                  {
                    value: 3.6,
                    name: "",
                    label:{
                      show:false
                   }
                  }

                ]
              },

              {
                name: "内部",
                type: "pie",
                center: ["50%", "35%"],
                radius: ["0%", "35%"],//第一个元素调整中心面积大小，
                color: [
                  "rgba(21,74,238,.9)",
                  "rgba(11,32,134,.9)",
                  "#8f44ab",
                  "#8a64ab",
                  "#6e3aab",
                  "#5f6cb4",
                  "#70c3c8",
                  "#06dcab",
                  "#06f0ab"
                ],
                label: {
                  show: true ,
                  position:'inside'
                },
                labelLine: { show: true },
                data: [
                  { value: 3, name: "民用" },
                  { value: 7, name: "非民用" }
                ]
              }
            ]
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
          window.addEventListener("resize", function() {
            myChart.resize();
          });
        }
      }
    }
</script>

<style scoped>
  .pie2d{
    height: 100%;
    width: 100%;
  }
</style>
