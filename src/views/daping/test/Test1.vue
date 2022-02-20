<template>
  <!--地图容器-->
  <div id="container"></div>
</template>
<script>


  export default {
    name:'aa',
    data () {
      return {

      }
    },
    mounted(){
      this.loadScript()
      window.onload = loadScript;
    },
    methods:{
        //初始化地图
       initialize() {
         //创建地图实例
        let map = new BMap.Map('container');
        //设置中心点坐标
        let point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
         // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(point, 16);
         map.enableScrollWheelZoom(true);
         let marker = new BMap.Marker(point);
         map.addOverlay(marker);





         let opts = {type: BMAP_NAVIGATION_CONTROL_LARGE	}
        map.addControl(new BMap.NavigationControl(opts));
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
       },
        //加载百度地图js
       loadScript() {
        let script = document.createElement("script");
        script.src = "https://api.map.baidu.com/api?v=3.0&ak=KLr3YRX3ZOtE4pRCLBSdowC3KaNGTGQi";
        script.onload = () => {
          this.initialize()
        }
        document.body.appendChild(script);
      },
    }
  }
</script>
<style scoped>
  #container{
    height:100vh;
    width: 100%;
  }
</style>
