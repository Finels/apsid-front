<template>
  <el-row>
    <div class="content-box">
      <el-col :span="6">
        <div class="menu">
          <span>MENUS</span>
        </div>
        <div class="welcome">
          <ul>
            <li><a href="#/scientificCommittee"><span>Scientific Committee</span></a></li>
            <li><a href="#/organizingCommittee"><span>Organizing Committee</span></a></li>
            <li><a href="#/speakers"><span>Speakers</span></a></li>
            <li><a href="#/generalInformation"><span>General Information</span></a></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="16" :offset="2">
        <div class="Speakers-content">
          <div class="content-titel">
            <h1>ORGANIZING COMMITTEE</h1>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>Excutive Chief of Committee</h2>
              <span>Xiaodong Zhao</span>
            </div>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>Member</h2>
              <span>Xuemei Tang, Enmei  Liu,  Jie Yu, Juan Zhao, Yunfei An, Luo Ren, Xizhou An, Zhiyong  Zhang, Lina Zhou, </span>
              <span>Ni Zeng</span>
            </div>
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
  .menu {
    margin-top: 6rem;
    width: 100%;
    text-align: center;
    border-bottom: 0.2rem solid #f15a22;
    height: 3rem;
  }

  .menu span {
    line-height: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #f15a22;
    font-family: sans-serif;
  }

  .welcome ul li {
    line-height: 2.5rem;
    margin-top: 0.5rem;
    border: 0.05rem solid #ffffff;
    border-bottom: 0.1rem solid #f15a22;
    background: #f15a22;
    border-radius: 0.8rem;
  }

  .welcome ul li:hover {
    background: #e9669c;
    border-radius: 1rem;
  }

  .welcome ul li a {
    color: #ffffff;
    font-family: sans-serif;
  }

  .welcome ul li a:hover {
    color: #ffffff;
    font-size: 1.1rem;
  }

  .welcome ul li span {
    display: block;
    text-align: center;
    font-family: sans-serif;
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
    margin-top: 2rem;
    border-radius: 30%;
  }

  .content-main-font{
  }
  .content-main-font h2{
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
