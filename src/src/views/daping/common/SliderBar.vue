<template>
    <div class="base"></div>
</template>

<script>
    export default {
        name: "SliderBar"
    }
</script>

<style scoped>
  .base{
    width: 100%;
    height: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: -webkit-linear-gradient(left, rgba(23,46,130,0) , rgba(8, 66, 212, 0.93)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, rgba(23,46,130,0),rgba(8, 66, 212, 0.93)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, rgba(23,46,130,0), rgba(8, 66, 212, 0.93)); /* Firefox 3.6 - 15 */
    background: linear-gradient(left, rgba(23,46,130,0) , rgba(8, 66, 212, 0.93)); /* 标准的语法 */
  }
</style>
