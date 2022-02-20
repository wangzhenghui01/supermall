<template>
    <div class="base">
        <div :class="yearActivited ? special_button : usually_button" @click="selectedYear">年</div>
        <div :class="monthActivited ? special_button : usually_button" @click="selectedMonth">月</div>
        <div :class="dayActivited ? special_button : usually_button" @click="selectedDay">日</div>
    </div>
</template>

<script>
    export default {
        name: "DateButton",
        data(){
          return {
            usually_button:'usually-button',
            special_button:'special-button',
            yearActivited:false,
            monthActivited:true,
            dayActivited:false
          }
        },
      methods:{
        selectedYear(){
          this.$emit('year-click')
          this.yearActivited = true
          this.monthActivited = false
          this.dayActivited = false

        },
        selectedMonth(){
          this.$emit('month-click')
          this.yearActivited = false
          this.monthActivited = true
          this.dayActivited = false

        },
        selectedDay(){
          this.$emit('day-click')
          this.yearActivited = false
          this.monthActivited = false
          this.dayActivited = true

        }
      }
    }
</script>

<style scoped>
  .base{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  .usually-button{
    text-align: center;
    padding-top:6%;
    background-color:rgba(117,148,255,0);
    height: 90%;
    width: 15%;
    margin-left: 12%;
    color: rgba(255, 255, 255, 0.7);
    float: left;
  }
  .special-button{
    text-align: center;
    float: left;
    background-color: rgba(117,148,255,0);
    height: 90%;
    width: 15%;
    padding-top:6%;
    color: #fff;
    margin-left: 12%;
    border-bottom: 2px #0578B9 solid;
  }
</style>
