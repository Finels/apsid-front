<template>
  <div id="container" class="mymap"></div>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by xzc
   * 描述:
   */
  import AMap from 'AMap'   // 在页面中引入高德地图
  import AMapUI from 'AMapUI'
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

        addMarker()
        function addMarker() {
          map.clearMap()
          AMapUI.loadUI(['overlay/AwesomeMarker'], function(AwesomeMarker) {
            var marker = new AwesomeMarker({
              awesomeIcon: 'group',
              iconLabel: {
                style: {
                  color: '#000'
                }
              },
              iconStyle: 'orange',
              map: map,
              zIndex: 9999999,
              position: map.getCenter()
            })
            infoWindow.open(map, marker.getPosition())
            AMap.event.addListener(marker, 'click', function() {
              infoWindow.open(map, marker.getPosition())
            })
          })
        }

        var title = 'Radisson Blu Plaza Hotel, Chongqing'
        var content = []
        content.push("<img src='http://cache.carlsonhotels.com/galleries/radblu/photos/webextra/chncnbl/main_gallery/nighttime_exterior_1280x960.jpg' style='width:100px;height:66px;float: left;margin-right: 6px;'>Address: No.22 NanBin Road, Nan'an")
        content.push('Tel: +86 23 8866 8888')
        content.push("<a target='_blank' href='https://www.radissonblu.com/zh/hotel-chongqing' style='color: #013763;'>Details</a>")
        var infoWindow = new AMap.InfoWindow({
          isCustom: true,
          content: createInfoWindow(title, content.join('<br/>')),
          offset: new AMap.Pixel(16, -45)
        })

        function createInfoWindow(title, content) {
          var info = document.createElement('div')
          info.className = 'info'
          info.style = 'border: solid 1px silver;'

          var top = document.createElement('div')
          var titleD = document.createElement('div')
          var closeX = document.createElement('img')
          top.className = 'info-top'
          top.style = 'position: relative;\n' +
            '          background: none repeat scroll 0 0 #F9F9F9;\n' +
            '          border-bottom: 1px solid #CCC;\n' +
            '          border-radius: 5px 5px 0 0;'
          titleD.innerHTML = title
          titleD.style = 'display: inline-block;\n' +
            '            color: #333333;\n' +
            '            font-size: 14px;\n' +
            '            font-weight: bold;\n' +
            '            line-height: 31px;\n' +
            '            padding: 0 10px;'
          closeX.src = 'http://webapi.amap.com/images/close2.gif'
          closeX.style = 'position: absolute;\n' +
            '            top: 10px;\n' +
            '            right: 10px;\n' +
            '            transition-duration: 0.25s;'
          closeX.onclick = closeInfoWindow

          top.appendChild(titleD)
          top.appendChild(closeX)
          info.appendChild(top)

          var middle = document.createElement('div')
          middle.className = 'info-middle'
          middle.style = 'font-size: 12px;\n' +
            '            padding: 6px;\n' +
            '            line-height: 20px;'
          middle.style.backgroundColor = 'white'
          middle.innerHTML = content
          info.appendChild(middle)

          var bottom = document.createElement('div')
          bottom.className = 'info-bottom'
          bottom.style = 'height: 0px;\n' +
            '            width: 100%;\n' +
            '            clear: both;\n' +
            '            text-align: center;'
          bottom.style.position = 'relative'
          bottom.style.top = '0px'
          bottom.style.margin = '0 auto'
          var sharp = document.createElement('img')
          sharp.src = 'http://webapi.amap.com/images/sharp.png'
          sharp.style = 'position: relative;\n' +
            '            z-index: 104;'
          bottom.appendChild(sharp)
          info.appendChild(bottom)
          return info
        }

        function closeInfoWindow() {
          map.clearInfoWindow()
        }
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
