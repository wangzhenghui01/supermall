<template>
    <div class="box-base">
      <div class="selectDown" @click="clickMe()" @mouseenter="clickMe()">
        <div class="text-area" v-model="value">{{value === ''?placeholder:value}}</div>
        <a-icon v-show="show" class="icon-down" type="down" />
        <a-icon v-show="!show" class="icon-down" type="up" />
      </div>
      <ul :class="showList ? displayBlockUl:displayNoneUl" @mouseleave="hiddenList()">
        <li @click="getValue(index,item)" v-for="(item,index) in option" :key="item.index">{{ item.name }}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "MySelect",
      props:{
        option:{
          type:Array,
          default:[
            {
              'name':111567567
            },
            {
              'name':222
            },
            {
              'name':333
            }, {
              'name':444
            }
          ]
        },
        placeholder:{
          type: String,
          default: '请输入'
        }
      },
      data(){
          return {
            showList:false,
            displayBlockUl:'display-block-ul',
            displayNoneUl:'display-none-ul',
            value:'',
            show:true
          }
      },
      methods: {
        clickMe(){
          if (this.showList) {
            this.showList = false
            this.show = true
          }else {
            this.showList = true
            this.show = false
          }
        },
        hiddenList(){
          this.showList = false
          this.show = true
        },
        getValue(index,item){
          this.value = item.name
          this.placeholder = item.name
          this.showList = false
          this.show = true
        }
      },
    }
</script>

<style scoped>
  .box-base{
    width: 100%;
    position: relative;
    background: -webkit-linear-gradient(top, rgba(23,46,130,0) , rgba(8, 66, 212, 0.93)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(top, rgba(23,46,130,0),rgba(8, 66, 212, 0.93)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(top, rgba(23,46,130,0), rgba(8, 66, 212, 0.93)); /* Firefox 3.6 - 15 */
    background: linear-gradient(top, rgba(23,46,130,0) , rgba(8, 66, 212, 0.93)); /* 标准的语法 */
  }
  .display-block-ul{
    display: block;
    position: absolute;
    background-color: #4f5bff;
    border: 1px solid #999;
    border-radius: 5px;
    z-index: 9999;
    margin-top: 5px;
    padding: 0;
    width: 100%;
  }
  .display-none-ul{
    display: none;
  }
  .display-block-ul li{
    padding: 3px;
    list-style: none;
    margin-top: 1px;
  }
  .display-block-ul li:hover{
    background-color: highlight;
  }
  .selectDown{
    display: flex;
    padding: 4px;
    flex-direction: row;
  }
  .text-area{
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .icon-down{
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    padding-top: 2%;
  }
</style>
