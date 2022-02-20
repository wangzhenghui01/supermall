<template>
    <div class="base">
      <div class="number">
        <div class="number-inside">
          {{number}}
        </div>
      </div>
      <div class="sign">
        <div class="sign-inside">
          {{sign}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TotalData",
      props:{
        number:{
          type:Number,
          default:14566255
        },
        sign:{
          type:String,
          default: '非居民户数'
        }
      }
    }
</script>

<style scoped>
  .base{
    width: 100%;
    height: 100%;
    position: relative;
    text-align: right;
  }
  .number{
    width: 100%;
    height: 45%;
    position: absolute;
  }
  .sign{
    width: 100%;
    height: 40%;
    background: -webkit-linear-gradient(left, rgba(23,46,130,0) , #0057AC); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, rgba(23,46,130,0),#0057AC); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, rgba(23,46,130,0), #0057AC); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, rgba(23,46,130,0) , #0057AC); /* 标准的语法 */
    position: absolute;
    bottom: 0;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  .sign-inside{
    width: 90%;
    height: 100%;
    color:#fff;
    margin-top: 3%;
  }
  .number-inside{
    color: #ffeb7b;
    font-size: 25px;
    width: 88%;
    line-height: 100%;
  }
</style>
