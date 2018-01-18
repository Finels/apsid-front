<template>
  <div id="container" class="mymap"></div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by xzc
   * 描述:
   */
  import AMap from 'AMap'   // 在页面中引入高德地图
  export default {
    mounted() {
      this.loadmap()    // 加载地图和相关组件
    },
    methods: {
      loadmap() {
        const map = new AMap.Map('container', {
          zoom: 9,
          center: [106.566101, 29.539709]
        })
        // ['en', 'zh_en', 'zh_cn']
        map.setLang('en')
        AMap.service(['AMap.PlaceSearch'], function () {
          let placeSearch = new AMap.PlaceSearch({ // 构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: '重庆', // 城市
            map: map
          })
          // 关键字查询
          placeSearch.search('丽笙世嘉酒店', function (status, result) {
          })
        })
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'],
          function () {
            map.addControl(new AMap.ToolBar())

            map.addControl(new AMap.Scale())

            map.addControl(new AMap.OverView({isOpen: true}))
          })
      }
    }
  }
</script>

<style scoped>
  .mymap {
    width: 100%;
    height: 400px;
  }
</style>
