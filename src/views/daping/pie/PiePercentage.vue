<template>
	<div class="base" ref="pie"></div>
</template>

<script>
export default {
  name: "PiePercentage",
  mounted() {
    this.pie();
  },
  methods: {
    pie() {
      let myChart = this.$echarts.init(this.$refs.pie);
      let num = 0;
      let option = {
        backgroundColor: "rgba(51,69,215,.1)",
        title: [
          {
            text: "SPEED",
            x: "center",
            top: "52%",
            textStyle: {
              color: "#fdf914",
              fontSize: 16,
              fontWeight: "100"
            }
          },
          {
            text: "60%",
            x: "center",
            top: "42%",
            textStyle: {
              fontSize: "25",
              color: "#fdf914",
              fontFamily: "Lato",
              foontWeight: "600"
            }
          }
        ],
        polar: {
          radius: ["44%", "50%"],
          center: ["50%", "50%"]
        },
        angleAxis: {
          max: 100,
          show: false
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)"
            },
            data: [60],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#fdf914"
                  },
                  {
                    offset: 1,
                    color: "rgba(56,167,0,.4)"
                  }
                ])
              }
            }
          },
          {
            type: "gauge",
            name: "",
            radius: "57%",
            startAngle: "0",
            endAngle: "-359.99",
            splitNumber: "200",
            center: ["50%", "50%"],
            pointer: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 95,
                name: ""
              }
            ],
            axisLine: {
              lineStyle: {
                width: 20,
                opacity: 0
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 13,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#111"
                    },
                    {
                      offset: 0.5,
                      color: "rgba(66, 66, 66, 1)"
                    },
                    {
                      offset: 1,
                      color: "#111"
                    }
                  ],
                  globalCoord: false
                },
                width: 1,
                type: "solid"
              }
            },
            axisLabel: {
              show: false
            }
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: ["60%", "62%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false
                },
                color: "rgba(66, 66, 66, .4)",
                shadowBlur: 10,
                shadowColor: "rgba(253, 249, 20, .3)"
              }
            },
            data: [
              {
                value: 100
              }
            ]
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: ["62.5%", "64%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false
                },
                color: "rgba(66, 66, 66, 1)",
                shadowBlur: 10,
                shadowColor: "rgba(253, 249, 20, .3)"
              }
            },
            data: [
              {
                value: 100
              }
            ]
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: ["64.5%", "65.8%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false
                },
                color: "rgba(66, 66, 66, .2)",
                shadowBlur: 10,
                shadowColor: "rgba(253, 249, 20, .3)"
              }
            },
            data: [
              {
                value: 100
              }
            ]
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: ["66.5%", "67.5%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false
                },
                color: "rgba(66, 66, 66, .1)",
                shadowBlur: 10,
                shadowColor: "rgba(253, 249, 20, .3)"
              }
            },
            data: [
              {
                value: 100
              }
            ]
          },
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function(params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.545,
                  startAngle: ((0 + num) * Math.PI) / 180,
                  endAngle: ((1 + num) * Math.PI) / 180
                },
                style: {
                  stroke: "#fdf914",
                  fill: "transparent",
                  lineWidth: 5
                },
                silent: true
              };
            },
            data: [0]
          }
        ]
      };
      function numb() {
        num = num + 5;
        myChart.setOption(option, true);
      }
      setInterval(function() {
        numb();
      }, 100);
      // myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
.base {
  width: 100%;
  height: 100%;
}
</style>
