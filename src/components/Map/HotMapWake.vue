<template>
  <div class="baidumap" id="allmap4">

  </div>
</template>
<script>
  import BMap from 'BMap';
  import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';
  export default {
    mounted() {
      this.baiduMap();
    },
    props: {
      //经度
      longitude: Number,
      //纬度
      latitude: Number,
      //放大的倍数
      mapScale: Number
    },
    methods: {
      baiduMap () {
        let map = new BMap.Map('allmap4');
        map.disableDragging();     //禁止拖拽
        const {longitude, latitude, mapScale} = this;
        let point = new BMap.Point(longitude,latitude);
        map.centerAndZoom(point, mapScale);
        map.setMapStyle({
          styleJson:[

            {
              "featureType": "land",
              "elementType": "all",
              "stylers": {
                "color": "#003979ff"
              }
            },
            {
              "featureType": "green",
              "elementType": "all",
              "stylers": {
                "color": "#004292ff"
              }
            },

            {
              "featureType": "local",
              "elementType": "all",
              "stylers": {
                "color": "#4fdb75e0"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "all",
              "stylers": {
                "color": "#0a88a5cf"
              }
            },
           /*建筑物*/
            {
              "featureType": "building",
              "elementType": "all",
              "stylers": {
                "color": "#004292ff"
              }
            },

          ]
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .baidumap {
    width: 100%;
    height: 100%;

  }
</style>

