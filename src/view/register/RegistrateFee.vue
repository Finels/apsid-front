<template>
  <el-row>
    <div class="content-box">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Registration Payment</span>
          </div>
          <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column
              prop="RegistrationTime"
              label="Registration Time">
            </el-table-column>
            <el-table-column
              prop="RegistrationPayment"
              label="Registration Payment">
            </el-table-column>
          </el-table>
          <div class="fee-box">
            <h3>Registration Fee</h3>
            <span style="line-height: 2rem; margin-left:0.8rem;margin-right:0.4rem;float:left;display:block;color: red">*</span>
            <p>
              Registration fee includes registration fee, textbook materials and light lunch costs, While hotel accommodation is not covered.</p>
          </div>
          <div class="fee-box">
            <h3>Bank Draft</h3>
            <P>Registration payment by Bank transfer or on-site payment, Bank transfer is recommended.</P>
            <p style="padding-left: 2rem;">1.Account Name: Chongqing swan international tourism co., LTD</p>
            <p style="padding-left: 2rem;">2.Account No: 113004875475</p>
            <p style="padding-left: 2rem;">3.Bank Name: The bank of China chongqing branch sales department</p>
            <p style="padding-left: 2rem;">4.Bank Address: Zhongshan 218 all the way yuzhong district of chongqing</p>
            <p style="padding-left: 2rem;">5.Swift Code: BKCHCNBJ59A</p>
            <h3>Attention</h3>
            <p>
              Remittors please be sure to indicate in the remittance column "Registration Code+APSID+name" and send cash remittance by the photo file to e-mail anyf82@aliyun.com or zengni-xiao.mao@163.com.</p>
          </div>
        </el-card>
      </el-col>
    </div>
  </el-row>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by xzc
   * 描述:
   */
  export default {
    data() {
      return {
        tableData: [
          {
            RegistrationTime: 'On or Before 31 March',
            RegistrationPayment: 'RMB ¥1600'
          },
          {
            RegistrationTime: 'Between 31 March and 6 May',
            RegistrationPayment: 'RMB ¥2000'
          },
          {
            RegistrationTime: 'Attend both summer school and congress',
            RegistrationPayment: 'RMB ¥2000(summer school) + ¥1000(congress)'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .content-box {
    width: 75%;
    margin: 0 auto;
  }

  .fee-box {
    margin: 2rem;
  }

  .el-card__header .clearfix span {
    font-size: 1.2rem;
  }

  .fee-box span {
    line-height: 2rem;
    font-size: 1rem;
    color: #013763;
    font-weight: bold;
  }

  .fee-box p {
    margin-left: 1rem;
    line-height: 2rem;
    color: #013763;

  }

  .fee-box h3 {
    margin-left: 1rem;
    line-height: 2rem;
  }
</style>
