<template>
    <div class="base">
      <div class="text"></div>
      <div class="slider">
        <div class="slider-inside">
          <slider_bar></slider_bar>
        </div>
      </div>
      <div class="number"></div>
    </div>
</template>

<script>
    import SliderBar from './SliderBar'
    export default {
      name: "SliderCombination",
      components:{
        slider_bar:SliderBar
      }
    }
</script>

<style scoped>
  .base{
    width: 400px;
    height: 20px;
  }
  .text{
    width: 22%;
    height: 100%;
    background-color: #00FF90;
    float: left;
  }
  .slider{
    width: 50%;
    height: 100%;
    float: left;
    position: relative;
  }
  .number{
    width: 28%;
    height: 100%;
    float: left;
    background-color: #01D8EF;
  }
  .slider-inside{
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    transform: translate(-50%,-50%);
    background: -webkit-linear-gradient(left, rgba(23,46,130,0) , rgba(8, 66, 212, 0.93)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, rgba(23,46,130,0),rgba(8, 66, 212, 0.93)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, rgba(23,46,130,0), rgba(8, 66, 212, 0.93)); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, rgba(23,46,130,0) , rgba(8, 66, 212, 0.93)); /* 标准的语法 */
  }
</style>
