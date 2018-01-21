<template>
  <el-row>
    <div class="home">
      <div class="home-img">
        <div class="home-img-left">
          <el-carousel height="430px">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="home-img-right">
          <div class="img-right-time">
            <div class="home-right-time">
              <h2>COUNT DOWN</h2>
              <div class="count-down">
                <CountDown endTime="1525622490" :callback="callback" endText="Registration is over"></CountDown>
              </div>
              <br>
            </div>
            <div class="home-right-date">
              <span>CONFERENCE DATE</span>
              <br>
              <a href="#"><span
                style="color: #e9669c;font-weight: 400;line-height: 1.5rem;font-size: 1rem">7-8 MAY, 2018, Chongqing, China</span></a>
            </div>
            <div class="home-right-host">
              <span>HOST UNIT</span>
              <br>
              <a href="http://paed.hku.hk/apsid/home.html"><span
                style="color: #e9669c;font-weight: 400;line-height: 1.5rem;font-size: 1rem">Asia-Pacific Society for Immunodeficiencies</span></a>
            </div>
            <div class="home-right-undertake">
              <span>UNDERTAKINGD INSTITUTION</span>
              <br>
              <a href="http://www.chcmu.com"><span
                style="display:block;margin-top:1rem;color: #e9669c;font-weight: 400;line-height: 1.5rem;font-size: 1rem">Children's Hospital of Chongqing Medical University</span></a>
            </div>
          </div>
        </div>
      </div>
      <el-row>
        <el-col :span="24">
          <div class="text-announcement">
            <!--<span>Welcome Words</span>-->
          </div>
          <el-col :span="24" class="home-text">
            <div class="text-titel">
              <h1>Welcome Words</h1>
              <hr>
            </div>
            <div class="text-content text-content-left">
              <span>20<sup>th</sup> January, 2018</span>
              <span>Dear Friends,</span>
              <span style="display: block;margin-top: 1rem">Our Children's Hospital of Chongqing Medical University has been given the great honor to host the second Scientific Congress of Asia Pacific Society for Immunodeficiencies from May 7th to 8th, 2018. Primary immunodeficiency disease (PID) is one of the most challenging disease for children around the world. The children with PIDs need care from pediatrician in different fields with deep cooperation. So, topic of the 2th Scientific Congress of APSID is <i style="font-family: 'Helvetica Neue';"><b>Primary Immunodeficiency Diseases and Beyond...</b></i></span>
              <span style="display: block;margin-top: 1rem">We are now planning an exciting scientific program for promoting treatment and research across Primary Immunodeficiency Disease(PID) and associated fields such as Hematology, Rheumatology, Allergy, Respiratory diseases and Infection diseases. Accordingly the congress consists of four symposiums: 1) The main Symposium for PID (7th May); 2) Rheumatology and Allergic Diseases (8th May); 3) Respiratory and Infectious Disease (8th May); 4) Hematology and Transplantation (8th May). Professor Hans D. Ochs, Professor Adrian Thrasher, Professor Andrew J Cant, Professor Yu-lung LAU, Professor Surjit Singh, Kohsuke Imai, Professor Professor Alexei Grom, Professor Angelo Ravelli, Professor Lisa Westerberg, Professor Wenwei Tu, Professor Huamei Forsman, Professor Wenxia Song, Professor Kunling Shen and Professor Xiaodong Zhao et al. will give us excellent lectures.</span>
            </div>
            <div class="text-content text-content-right">
              <span style="display: block;margin-top: 1rem">To training the junior pediatrician, The APSID 2018 Summer School will be inaugurated on the 5th~6th May 2018 at the same venue, please kindly note the link(<a href="http://www.apsid2018school.com/en/" target="_blank" style="color: #ffffff;">http://www.apsid2018school.com/en/</a>).</span>
              <span style="display: block;margin-top: 1rem">We shall constantly update the web page to inform you how the scientific program is being developed. Please feel free to send us your suggestions in the next few months.</span>
              <span style="display: block;margin-top: 1rem">As the Executive Chief of Committee for the 2nd Scientific Congress of APSID, I sincerely invite you to come to the APSID 2018 Scientific Congress to promote excellences in PID research. Please mark the dates in your calendar and prepare to embrace the greetings from Chongqing!</span>
              <span
                style="padding-top:0.5rem;border-top:1px dashed #ffffff;display: block;margin-top: 1rem;font-weight: bold;font-size: 1.1rem">Professor Xiaodong Zhao</span>
              <img style="margin: 1rem" src="../../../static/img/zxd.png"/>
              <img style="margin: 1rem" src="../../../static/img/zhaoxiaodong.png"/>
              <span>Executive Chief of Committee</span>
              <span>The 2th Scientific Congress of APSID </span>
              <span>Children's Hospital of Chongqing Medical University</span>
            </div>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="text-announcement">
            <span>Website Links</span>
          </div>
          <div class="link">
            <div class="link-one">
              <a href="http://paed.hku.hk/apsid/home.html" target="_blank"><img src="../../../static/img/host.png"></a>
            </div>
            <div class="link-one">
              <a href="http://www.chcmu.com" target="_blank"><img src="../../../static/img/child.png"></a>
            </div>
            <div class="link-one">
              <a href="http://www.apsid2018school.com/en/" target="_blank"><img src="../../../static/img/school.png"></a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  /**
   * Created by xzc
   * 描述:
   */
  import {} from '../../http/apiResource'
  import CountDown from './CountDown.vue'
  export default {
    components: {CountDown},
    data() {
      return {}
    },
    mounted: function () {
      // this.$http.get(queryHomeContent).then(res => {
      // this.homeContentData = res.data
      // })
    },
    methods: {
      callback() {
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 75%;
    margin: 0 auto
  }

  .home-img {
    width: 100%;
    float: left;
    background: #fbfbfb;
  }

  .home-img-left {
    width: 70%;
    float: left;
  }

  .home-img-right {
    width: 28%;
    float: left;
    margin-left: 2%;
  }

  .img-right-time {
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    font-family: sans-serif;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item h3 {
    display: none;
  }

  .el-carousel__item:nth-child(2n) {
    background: url("../../../static/img/home3.jpg");
    background-size: 100% 100%
  }

  .el-carousel__item:nth-child(2n+1) {
    background: url("../../../static/img/home2.jpg");
    background-size: 100% 100%
  }

  .el-carousel__item:nth-child(3n) {
    background: url("../../../static/img/home1.jpg");
    background-size: 100% 100%;
  }

  .home-right-time {
    width: 90%;
    margin-top: 1rem;
  }

  .home-right-time h2 {
    display: block;
    text-align: left;
    font-family: sans-serif;
    font-size: 1.0rem;
    font-weight: bold;
    color: #013763;
  }

  .count-down {
    margin-top: 1rem;
    width: 100%;
    height: 2rem;
  }

  .home-right-time .count-down span {
    background: #00aec9;
    width: 100%;
    padding: 0.8rem 0;
    border-radius: 1rem;
    display: block;
    text-align: center;
    font-size: 1.0rem;
    font-weight: bold;
    font-family: sans-serif;
    line-height: 2rem;
    color: #fff;
    box-shadow: 0.5em 0.5rem 0.5rem #ccc;
  }

  .home-right-date{
    width: 100%;
    margin-top: 1.5rem;
  }

  .home-right-date span {
    font-size: 1.0rem;
    line-height: 3rem;
    font-weight: bold;
    font-family: sans-serif;
    color: #013763;
  }

  .home-right-host {
    width: 100%;
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .home-right-host span {
    font-size: 1.0rem;
    line-height: 3rem;
    font-weight: bold;
    font-family: sans-serif;
    color: #013763;
  }

  .home-right-host a :hover {
    color: #666 !important;
  }

  .home-right-undertake span {
    font-size: 1.0rem;
    font-weight: bold;
    font-family: sans-serif;
    color: #013763;
  }

  .home-right-undertake a :hover {
    color: #666 !important;
  }

  .home-right-undertake {
    margin-bottom: 1.8rem;
  }

  .home-right-undertake img {
    width: 100%;
    margin-top: 2rem;
  }

  .text-announcement {
    width: 100%;
    margin-top: 1rem;
    border-bottom: 0.2rem solid #f15a22;
  }

  .text-announcement span {
    margin-left: 2rem;
    font-size: 1.5rem;
    line-height: 3rem;
    font-family: sans-serif;
    font-weight: bold;
    color: #013763;
  }

  .home-text {
    margin-top: 1.6rem;
    background: #f15a22;
    background-color: rgba(241, 90, 34, 0.86);
    min-height: 200px;
    border-radius: 1rem;
  }

  .text-titel {
    padding: 2rem 2rem 0rem 2rem;
  }

  .text-titel h1 {
    color: #ffffff;
    font-size: 1.5rem;
    font-family: Helvetica;
  }

  .text-content-left {
    width: 43%;
    float: left;
    margin: 2% 1% 2% 3%;
    border-right: 1px dashed #ffffff;
    padding-right: 2.8%;
  }

  .text-content-right {
    width: 43%;
    float: left;
    margin: 2% 0% 2% 3%;
    padding-left: 0.2%;
  }

  .text-content span {
    color: #ffffff;
    font-family: sans-serif;
    display: block;
    font-size: 1.0rem;
    line-height: 1.5rem;

  }

  .text-content span sup{
    vertical-align: super;
    font-size: 0.8rem;
  }

  .link {
    width: 100%;
    margin-top: 1.6rem;
  }

  .link-one {
    width: 30%;
    margin-left: 2%;
    float: left;
  }

  .link-one img {
    width: 100%;
    height: 86px;
  }
</style>
