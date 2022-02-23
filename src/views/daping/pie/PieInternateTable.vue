<template>
	<div class="base" ref="piee"></div>
</template>

<script>
export default {
  name: "PieInternateTable",
  mounted() {
    this.pie();
  },
  methods: {
    pie() {
      let myChart = this.$echarts.init(this.$refs.piee);
      let color = [
        "#0E7CE2",
        "#FF8352",
        "#E271DE",
        "#F8456B",
        "#00FFFF",
        "#4AEAB0"
      ];
      let echartData = [
        {
          name: "A类",
          value: "3720"
        },
        {
          name: "B类",
          value: "2920"
        },
        {
          name: "C类",
          value: "2200"
        },
        {
          name: "D类",
          value: "1420"
        }
      ];
      let option = {
        backgroundColor: "#fff",
        color: color,
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "50%"],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 6
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.base {
  width: 400px;
  height: 400px;
  background-color: #00bbf2;
}
</style>
