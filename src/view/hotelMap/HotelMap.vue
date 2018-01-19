<template>
  <el-row>
    <div class="content-box">
      <el-col :span="10">
        <div class="map-box-font">
          <span>Accommodation</span>
          <a href="https://www.radissonblu.com/zh/hotel-chongqing" target="_blank"><p style="text-decoration: underline">Radisson Blu Plaza Hotel, Chongqing</p>
          </a>
          <p>
            Instructions: The hotel is arranged, but you need to book a room by filling in and submitting the reservation form to the given email address, you can get a discount price.
          </p>
        </div>
        <div class="map-box-font">
          <span>Reservation form downloads</span>
          <a href="../../../static/download/Reservation%20Form(CHCMU).xlsx"><p style="text-decoration: underline">Reservation Form(CHCMU).xlsx</p>
          </a>
        </div>
        <div class="map-box-font">
          <span>Traffic</span>
          <p>Service group free bus: 2018.5.4/5/6/7/8</p>
          <P>There is a shuttle bus to the airport in the morning and evening.</p>
          <p>Taxi: Jiangbei International Airport-Hotel(About:￥60)</p>
        </div>
      </el-col>
      <el-col :span="12" :offset="2">
        <div class="map-box">
          <MapBage></MapBage>
        </div>
      </el-col>
    </div>
  </el-row>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by xzc
   * 描述:
   */
  import MapBage from './MapBage.vue'
  export default {
    components: {MapBage}
  }
</script>

<style scoped>
  .content-box{
    width: 75%;
    margin: 0 auto;
  }
  .map-box {
    width: 100%;
    border: 0.1rem solid #f15a22;
  }

  .map-box img {
    width: 100%;
  }

  .map-box-font a :hover {
    color: #3a8ee6;
  }


  .map-box-font span {
    color: #f15a22;
    display: block;
    font-size: 1.4rem;
    line-height: 3rem;
    border-bottom: 0.3rem solid #f15a22;
    font-family: sans-serif;
  }

  .map-box-font p {
    line-height: 2rem;
    font-size: 1rem;
    color: #013763;
    font-family: sans-serif;
  }
</style>
