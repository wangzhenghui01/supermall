<template>
    <div class="base" ref="business_information">
    </div>
</template>

<script>
    export default {
      name: "BusinessInformationPie",
      data(){
        return {
          businessData:[
            {
              'name': '北京',
              'value': 30,
              blur:{
                labelLine:{
                  show:true,
                  lineStyle:{
                    type:[10,20],
                    dashOffset:10
                  }
                }
              }
            },
            {
              'name': '上海',
              'value': 17
            },
            {
              'name': '广州',
              'value': 16
            },
            {
              'name': '深圳',
              'value': 15
            },
            {
              'name': '未知',
              'value': 13
            },
            {
              'name': '海外',
              'value': 9
            }]
        }
      },
      created(){

      },
      mounted(){
        this.right2_2Pie()
      },
      methods:{
        right2_2Pie(){
          let colorList = [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(51,220,240,1)' // 0% 处的颜色
            },
              {
                offset: 1,
                color: 'rgba(13,121,133,1)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
            {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(0,187,237,1)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: 'rgba(0,107,138,1)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(158,135,255,0.02)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: 'rgba(158,135,255,0.8)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(252,75,75,0.01)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: 'rgba(252,75,75,0.8)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 1,
              y: 1,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(253,138,106,0.01)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: '#FDB36ac2' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: '#FECE4391' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          ]

          let myChart = this.$echarts.init(this.$refs.business_information)
          let option = {
            series: [{
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              clockwise: true,
              avoidLabelOverlap: true,
              label: {
                show: true,
                position: 'outside',
                formatter: function(params) {
                  const name = params.name
                  const percent = params.percent + '%'
                  const index = params.dataIndex
                  return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join('\n')
                },
                rich: this.getRich()
              },
              itemStyle: {
                normal: {
                  color: function(params) {
                    return colorList[params.dataIndex]
                  }
                }
              },
              data:this.businessData,
              roseType: 'radius',
              animationType:'scale',
              animationEasing:'elasticOut',
              animationDuration:3000
            }]
          }
          myChart.setOption(option);
          window.addEventListener("resize", function() {
            myChart.resize();
          });
        },
        getRich() {
          let colorLine = ['#33C0CD', '#73ACFF', '#9E87FF', '#FE6969', '#FDB36A', '#FECE43']
          this.businessData.sort((a, b) => {
            return b.value - a.value
          })
          this.businessData.forEach((v, i) => {
            v.labelLine = {
              lineStyle: {
                width: 1,
                color: colorLine[i]
              }
            }
          })
          let result = {}
          colorLine.forEach((v, i) => {
            result[`hr${i}`] = {
              backgroundColor: colorLine[i],
              borderRadius: 3,
              width: 3,
              height: 3,
              padding: [3, 3, 0, -12]
            }
            result[`a${i}`] = {
              padding: [-11, 6, -20, 20],
              color: colorLine[i],
              backgroundColor: 'transparent',
              fontSize: 12
            }
          })
          return result
        }
      }
    }
</script>

<style scoped>
  .base{
    width: 100%;
    height: 100%;
  }
</style>
