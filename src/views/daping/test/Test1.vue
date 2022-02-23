<template>
  <!--地图容器-->
  <div id="container"></div>
</template>
<script>
let map = {};
export default {
  name: "aa",
  data() {
    return {};
  },
  mounted() {
    this.loadScript();
    window.onload = this.loadScript();
  },
  methods: {
    //初始化地图
    initialize() {
      //创建地图实例
      map = new BMap.Map("container");
      //设置中心点坐标
      let point = new BMap.Point(116.404, 39.915);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 16);
      map.enableScrollWheelZoom(true);
      this.addMarker(point);
      this.addPolyLine();
    },
    //加载百度地图js
    loadScript() {
      let script = document.createElement("script");
      script.src =
        "https://api.map.baidu.com/api?v=3.0&ak=KLr3YRX3ZOtE4pRCLBSdowC3KaNGTGQi";
      script.onload = () => {
        this.initialize();
      };
      document.body.appendChild(script);
    },
    addMarker(point) {
      let myIcon = new BMap.Icon("qq.png", new BMap.Size(23, 25));
      let marker = new BMap.Marker(point, { icon: myIcon });
      map.addOverlay(marker);
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker.enableDragging(); //拖拽设置
    },
    addPolyLine() {
      let polyline = new BMap.Polyline(
        [new BMap.Point(116.399, 39.91), new BMap.Point(116.405, 39.92)],
        { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.8 }
      );
      map.addOverlay(polyline);
    }
  }
};
</script>
<style scoped>
#container {
  height: 70vh;
  width: 80%;
}
</style>
