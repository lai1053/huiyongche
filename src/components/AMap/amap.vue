<template>
  <div class="amap">
    <div id="container"></div>
  </div>
</template>

<script>
import mapLoader from './mapLoader.js'
import { MapKey } from './config'
export default {
  data () {
    return {
      AMapUI: null,
      AMap: null,
      map: null
    }
  },
  async created () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      // 载入高德地图和UI组件
      await mapLoader(`http://webapi.amap.com/maps?v=1.4.15&key=${MapKey}`)
      await mapLoader('http://webapi.amap.com/ui/1.0/main.js')
      this.initMap()
    }
  },
  methods: {
    initMap () {
      // let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap
      this.map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 13
      })

      // AMap.plugin('AMap.Geolocation', () => {
      //   var geolocation = new AMap.Geolocation({
      //     enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      //     timeout: 10000, // 超过10秒后停止定位，默认：5s
      //     buttonPosition: 'RB', // 定位按钮的停靠位置
      //     buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      //     zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点

      //   })
      //   this.map.addControl(geolocation)
      //   geolocation.getCurrentPosition((status, result) => {
      //     if (status === 'complete') {
      //       onComplete(result)
      //     } else {
      //       onError(result)
      //     }
      //   })
      // })
      // // 解析定位结果
      // function onComplete (data) {
      //   console.log('定位成功', data)
      // }
      // // 解析定位错误信息
      // function onError (err) {
      //   console.log('error', err)
      // }

      AMap.plugin(['AMap.ToolBar', 'AMap.Driving'], () => { // 异步同时加载多个插件
        this.map.addControl(new AMap.ToolBar({
          // 简易缩放模式，默认为 false
          liteStyle: true
        }))
        var driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          policy: AMap.DrivingPolicy.LEAST_TIME,
          map: this.map
        })

        var startLngLat = [116.379028, 39.865042]
        var endLngLat = [116.427281, 39.903719]

        driving.search(startLngLat, endLngLat, function (status, result) {
          // 未出错时，result即是对应的路线规划方案
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.amap{
  width: 100%;
  height: 100%;
  #container{
    width: 100%;
    height: 100%;
    // 去除高德地图水印
    /deep/ .amap-logo {
      display: none !important;
    }
    /deep/ .amap-copyright {
      display: none !important;
    }
  }
}
</style>
