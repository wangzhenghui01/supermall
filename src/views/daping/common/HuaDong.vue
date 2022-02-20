<template>
  <div class="box" >
      <div class="box-header" >
        <div class="text-partial" >{{slider_text}}</div>
        <div class="number-partial">{{slider_number}}</div>
      </div>
      <div class="box-footer">
        <div class="slider-body"></div>
        <div class="slider-head"></div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Slider",
        props:{
          slider_text:{
            type:String,
            default:'物联网表用户总量'
          },
          slider_number:{
            type:Number,
            default: 1213545
          }
        }
    }
</script>

<style scoped>
  .box{
    width: 90%;
    height: 90%;
  }
  .box-header{
    height: 55%;
    font-size: 17px;
  }
  .text-partial{
    width: 55%;
    color: #fff;
    float: left;
    margin-top: 1.5%;
    margin-left: 4%;
  }
  .number-partial{
    width: 45%;
    color: rgba(27,213,230,.8);
    float: right;
    margin-top: 1.5%;
    margin-right: -20%;
  }
  .box-footer{
    height: 20%;
    background-color: rgba(23, 47, 126, 0.62);
    margin-top: 1%;
  }
  .slider-body{
    height: 40%;
    width: 80%;
    float: left;
    background: -webkit-linear-gradient(left, rgba(23,46,130,0) , #01D8EF); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, rgba(23,46,130,0),#01D8EF); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, rgba(23,46,130,0), #01D8EF); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, rgba(23,46,130,0) , #01D8EF); /* 标准的语法 */
    margin-top: 1%;
  }
  .slider-head{
    height: 100%;
    width: 3%;
    float: left;
    margin-left: -0.5%;
    background-color: rgba(17,243,134,.9);
    border-radius: 50%;
  }
</style>
