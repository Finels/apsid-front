<template>
  <div class="heard-box">
    <el-row>
      <el-col :span="24">
        <el-col :span="3" :offset="2">
          <div class="heard-box-logo-left">
            <img src="../../../static/img/apsid.png"/>
          </div>
        </el-col>
        <el-col :span="10" :pull="1">
            <div class="heard-box-font heard-box2">
              <span>The 2nd Scientific Congress of Asia-Pacific </span>
            </div>
            <br>
            <div class="heard-box-font">
              <span>Society for Immunodeficiencies</span>
            </div>
        </el-col>
        <el-col :span="4" :pull="1">
          <div class="heard-box-logo-right">
            <img src="../../../static/img/APSID-LOGO.png"/>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /**
   * Created by xzc
   * 描述:
   */
  import {} from '../../http/apiResource'
  export default {
    data() {
      return {}
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style scoped>
  .heard-box {
    width: 100%;
    height: 9rem;
    background: url("../../../static/img/heard.png") no-repeat;
    background-size: 100% 100%;
  }

  .heard-box-logo-left {
    margin-top: 1rem;
    width: 100%;
    height: 6rem;
    background-size: 100% 100%;
  }

  .heard-box-logo-right {
    margin-top: 0.1rem;
    width: 100%;
    height: 6rem;
    background-size: 100% 100%;
  }

  .heard-box2 {
    margin-top: 3rem;
  }

  .heard-box-font span {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-family: Helvetica;
    color: #013763;
    font-weight: bold;
  }

  .heard-box-eg span {
    display: block;
    font-family: Helvetica;
    font-size: 1.2rem;
    color: #e9669c;
  }
</style>
