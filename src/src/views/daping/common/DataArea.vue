<template>
    <div class="base">
      <div class="area">
        <div class="text_area text">{{textArea}}</div>
      </div>
      <div class="area">
        <div class="text_area number">{{number}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DataArea",
      props:{
        textArea:{
          type:String,
          default:'今日售气量'
        },
        number:{
          type: Number,
          default: 154271
        }
      }
    }
</script>

<style scoped>
  .base{
    width: 50%;
    height: 50%;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-image: -webkit-linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #00BBF2 50%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-image: -moz-linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #00BBF2 50%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-image: linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #00BBF2 50%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
  }
  .area{
    height: 30%;
    margin-top: 6%;
  }
  .text_area{
    color:#fff;
    float: left;
    margin-left: 15%;
    height: 100%;
  }
  .number{
    font-size: 20px;
  }
  .text{
    font-size: 10px;
  }
</style>
