<template>
  <el-row>
    <div class="content-box">
      <el-col :span="24">
        <div class="Speakers-content">
          <div class="content-titel">
            <h1>CONTACT US</h1>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>Adress</h2>
              <span>Children's Hospital of Chongqing Medical University, No.136, Zhongshan 2nd Rd, Yuzhong District, Chongqing 400014, China</span>
            </div>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>Contact</h2>
              <span>Yunfei An, Tel: 86+13896187845, email: anyf82@aliyun.com</span>
              <span>Ni Zeng, Tel: 86+13883855183, email: zengni-xiao.mao@163.com</span>
            </div>
          </div>
          <div>
            <span style="line-height: 2rem; margin-left:0.8rem;float:left;display:block;color: red">*</span>
            <p style="line-height: 2rem;">If you need an invitation, please contact the email above after registration and payment</p>
          </div>
        </div>
      </el-col>
    </div>
  </el-row>
</template>

<script>
  /**
   * Created by xzc
   * 描述:
   */
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .content-box {
    width: 75%;
    margin: 0 auto;
  }
  .content-titel {
    margin-top: 1.5rem;
    height: 3rem;
    border-bottom: 0.2rem solid #f15a22;
  }

  .content-titel h1 {
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    color: #f15a22;
    font-family: sans-serif;
  }

  .content-main {
    width: 100%;
    float: left;
    border-radius: 30%;
  }

  .content-main-font {
  }

  .content-main-font h2 {
    display: block;
    margin-left: 1rem;
    font-size: 1.2rem;
    line-height: 3rem;
    text-align: left;
    font-family: sans-serif;
  }

  .content-main-font span {
    display: block;
    margin-left: 1rem;
    font-size: 1rem;
    line-height: 2rem;
    text-align: left;
    color: #013763;
    font-family: sans-serif;
  }
</style>
