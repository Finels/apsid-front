<template>
  <div class="footer-box">
    <hr>
    <el-row>
      <el-col :span="24">
          <div class="footer-lift">
            <span>Copyright Asia Pacific Society for Immunodeficiencies 2018</span>
            <br>
            <span>© All rights reserved</span>
          </div>
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
      return {
        input5: '',
        userName: '',
        picUrl: ''
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style scoped>
  .footer-box {
    width: 100%;
    margin-top: 1.6rem;
    height: 6rem;
    background: #00aec9;
  }

  .footer-lift {
    width: 100%;
    margin-top: 1rem;
  }

  .footer-lift span {
    display: block;
    line-height: 1rem;
    margin-left: 5%;
    font-family: sans-serif;
    text-align: center;
    font-size: 0.9rem;
    color: #fff;
  }

  .footer-lift a :hover {
    color: #e9669c;
  }

  .footer-infomate span {
    margin-top: 1rem;
    line-height: 1.5rem;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 0.8rem;
    text-align: center;
  }

  .footer-copyright span {
    line-height: 1.5rem;
    display: block;
    font-family: sans-serif;
    color: #ffffff;
    text-align: center;
    font-size: 0.8rem;
  }

  .footer-href span {
    color: #ffffff;
    font-family: sans-serif;
    text-decoration: underline;
    font-size: 0.9rem;
  }
</style>
