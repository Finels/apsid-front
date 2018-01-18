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
            <h1>GENERAL INFORMATION</h1>
          </div>
          <div class="content-main">
            <div class="content-main-font-box">
              <div class="content-main-font">
                <h2>MEETING ADDRESS</h2>
                <span>Radisson Blu Plaza Chongqing</span>
                <span>number 22 Nanbin Road in Chongqing Nan'an District.</span>
              </div>
              <div class="content-main">
                <div class="content-main-font">
                  <h2>ACCESSABILITY </h2>
                  <span>The Radisson Blu Plaza Chongqing is lacated in Nanbin Road. It takes about 1 hour from the Jiangbei airport to this hotel by taxi. You can easily reach this hotel by taxi or by free bus of conference group. A free bus from the airport to hotel will be provided in the morning and evening during this congress by the meeting team. </span>
                </div>
              </div>
            </div>
            <div class="content-main-font-img">
              <img src="../../../static/img/LY.png"/>
            </div>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>LANGUAGE</h2>
              <span>The official language of the Meeting is English.</span>
            </div>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>CURRENCY </h2>
              <span>The RMB is the official currency of Chongqing. Currency exchange can be made in most banks.</span>
            </div>
          </div>
          <div class="content-main">
            <img src="../../../static/img/HC.png"/>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>CLIMATE</h2>
              <span>Chongqing is an amazing city with long history and colorful cuisine culture. The meeting will be held in early summer, and It is the most pleasant season in Chongqing as well as the whole China. The average temperature during the day reaches a high of 30°C, and at night dip down to around 20°C.</span>
            </div>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>LIABILITY AND INSURANCE</h2>
              <span>The Meeting Secretariat and Organisers cannot accept liability for personal accidents or loss of or damage to private property of participants. Participants are advised to take out their own personal travel and health insurance for their trip.</span>
            </div>
          </div>
          <div class="content-main">
            <div class="content-main-font">
              <h2>APSID 2018 MEETING SECRETARIAT</h2>
              <span>Yunfei An</span>
              <span>Tel: 86+13896187845</span>
              <span>Email anyf82@aliyun.com</span>
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

  .content-main img {
    width: 80%;
    margin-left: 2rem;
  }
  .content-main-font{
  }

  .content-main-font-box {
    width: 48%;
    margin-right: 2%;
    float: left;
  }

  .content-main-font-img {
    width: 50%;
    float: left;
  }

  .content-main-font-img img {
    width: 100%;
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
