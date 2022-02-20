<template>
  <div class="box">
    <div class="pie-bottom" ref="pie_bottom">
    </div>
    <div class="pie-center" ref="pie_center">
    </div>
    <div class="pie-top">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import 'echarts-gl'
  import { getPie3D} from "./chart.js";
    export default {
        name: "BottomPie",
      data(){
          return {
            optionCenter:[{
              name: "营业厅",
              value: 10000,
              itemStyle:{
                color:'rgba(16,63,137,.9)'
              }
            }],
            optionBottom:[{
              name: "营业厅",
              value: 10000,
              itemStyle:{
                color:'rgba(20,80,152,.3)'
              }
            }]
          }
      },
      mounted(){
        this.centerPie()
        this.bottomPie()
      },
      methods:{
        centerPie(){
          //构建3d饼状图
          let myChart = this.$echarts.init(this.$refs.pie_center);
          // 传入数据生成 option
          this.option3 = getPie3D(this.optionCenter,0, 210, 20, 5, 0);
          myChart.setOption(this.option3);
          //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
          myChart.setOption(this.option3);
        },
        bottomPie(){
          //构建3d饼状图
          let myChart = this.$echarts.init(this.$refs.pie_bottom);
          // 传入数据生成 option
          this.option2 = getPie3D(this.optionBottom,0, 190, 20, 0.2, 0);
          myChart.setOption(this.option2);
          //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
          myChart.setOption(this.option2);
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 100%;
    width: 100%;
    position: relative;
  }
  .pie-bottom{
    width: 60%;
    height: 60%;
    position: absolute;
    z-index: 1;
    top: 24%;
    left: 20%;
  }
  .pie-center{
    width:60%;
    height: 60%;
    z-index: 2;
    position: absolute;
    top: 24%;
    left: 20%;
  }
  .pie-top{
    width: 100%;
    height: 100%;
    z-index: 3;
    position: relative;
    top: 0;
    left: 0;
  }

</style>
