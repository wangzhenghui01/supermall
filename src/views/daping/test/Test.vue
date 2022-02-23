<template>
  <div class="component">
    <div class="cardStyle">
      <!-- ready,地图组件渲染完毕时触发，返回一个百度地图的核心类和地图实例 -->
      <baidu-map
        id="map"
        class="mapStyle"
        :center="centerPoint"
        :zoom="16"
        :scroll-wheel-zoom="scroll"
        @ready="handler"
        @click="getPoint"
      >
        <bm-marker
          v-for="marker in markerArr"
          :key="marker.id"
          :position="marker"
          animation="BMAP_ANIMATION_BOUNCE"
        />
      </baidu-map>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let map = new BMap.initMap("map");
    map.enableScrollWheelZoom(true);
  },
  data() {
    return {
      //中心轴坐标
      centerPoint: {
        lng: 116.404,
        lat: 116.404
      },
      markerArr: [
        {
          id: 0,
          lng: 116.404,
          lat: 39.915
        }
      ],
      markerPoint: {},
      scroll: true
    };
  },
  methods: {
    // 完成一次组件卸载 / 重新加载的方法，重新渲染
    handler() {
      this.centerPoint.lng = 116.404;
      this.centerPoint.lat = 39.915;
    },
    // 添加点击函数，点击后修改marker的经纬度
    getPoint(e) {
      // 点击获取point经纬度
      const { lng, lat } = e.point;

      // 获取一个随机不重复的字符串做为id
      let id = new Date().getTime() + parseInt(Math.random() * 10000);
      // 新增一个marker标记
      this.markerArr.push({
        id: id,
        lng: lng,
        lat: lat
      });
    }
  }
};
</script>

<style scoped>
.mapStyle {
  width: 100%;
  height: calc(100vh - 130px);
}
.cardStyle {
  height: calc(100vh - 130px);
}
</style>
