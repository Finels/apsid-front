 <template>
    <el-row>
      <div class="content-box">
        <el-col :span="24">
          <div class="Speakers-content">
            <div class="content-titel">
              <h1>AGENDA</h1>
            </div>
            <div class="content-main">
              <div class="content-main-font">
                <h2>APSID Scientific Congress 2018 Programme</h2>
                <span style="margin-left: 1rem;color: #013763">Download address:</span><a
                href="../../../static/download/APSID%20scientific%20congress%202018%20Programme.pdf" target="_blank">
                <span class="content-main-font-span">APSID Scientific Congress 2018 Programme</span></a>
              </div>
            </div>
            <div style="margin-top: 1.6rem;">
              <img src="../../../static/img/agenda/0001.jpg" style="max-width: 100%;"/>
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
      border-radius: 30%;
    }

    .content-main-font h2 {
      display: block;
      margin-left: 1rem;
      font-size: 1.3rem;
      line-height: 3.5rem;
      text-align: left;
      font-family: sans-serif;
    }

    .content-main-font-span {
      margin-left: 1rem;
      font-size: 1rem;
      line-height: 2rem;
      text-align: left;
      color: #e9669c;
      font-family: sans-serif;
      text-decoration: underline;
  }</style>
