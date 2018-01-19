<template>
  <el-row>
    <div class="content-box">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Registration Information Table</span>
          </div>
          <p style="color: #606266;margin-top: 0.8rem;margin-bottom: 1.2rem;">
            <span style="color: #f15a22;margin-right: 0.2rem">*</span>Instructions: After submission, please check email for confirmation and get the identical Registration Code.
          </p>
          <el-form ref="registerForm" :model="registerForm" :rules="rules" :inline="true">
            <el-form-item label="First Name" prop="firstname">
              <el-input v-model="registerForm.firstname"></el-input>
            </el-form-item>
            <el-form-item label="Middle Name" prop="middlename">
              <el-input v-model="registerForm.middlename"></el-input>
            </el-form-item>
            <el-form-item label="Last Name" prop="lastname">
              <el-input v-model="registerForm.lastname"></el-input>
            </el-form-item>
            <el-form-item label="Position" prop="position">
              <el-input v-model="registerForm.position"></el-input>
            </el-form-item>
            <el-form-item label="Institution" prop="institution">
              <el-input v-model="registerForm.institution"></el-input>
            </el-form-item>
            <el-form-item label="Country" prop="country">
              <el-input v-model="registerForm.country"></el-input>
            </el-form-item>
            <el-form-item label="City" prop="city">
              <el-input v-model="registerForm.city"></el-input>
            </el-form-item>
            <el-form-item label="Address" prop="address">
              <el-input v-model="registerForm.address"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model.trim="registerForm.email" placeholder="Please enter a mailbox"></el-input>
            </el-form-item>
            <el-form-item label="Verification Code" prop="verCode">
              <el-input v-model.trim="registerForm.verCode" placeholder="Please enter the verification code"
                        @keyup.enter.native="saveForm('registerForm')">
              </el-input>
            </el-form-item>
            <el-form-item>
              <div class="verify-code-box">
                <img id="veryCode" @click="queryCode" title="看不清，换一张" class="verify-code"/>
              </div>
            </el-form-item>
          </el-form>
          <div class="registerForm-button">
            <el-button type="success" @click="saveForm('registerForm')">submission</el-button>
            <el-button type="ghost" @click="resetForm">cancel</el-button>
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
  import {registerSave, veryCode} from '../../http/apiResource'
  export default {
    data() {
      return {
        rules: {
          firstname: [
            {required: true, message: 'This is required', trigger: 'blur'}
          ],
          lastname: [
            {required: true, message: 'This is required', trigger: 'blur'}
          ],
          position: [
            {required: true, message: 'This is required', trigger: 'blur'}
          ],
          institution: [
            {required: true, message: 'This is required', trigger: 'blur'}
          ],
          country: [
            {required: true, message: 'This is required', trigger: 'blur'}
          ],
          email: [
            {required: true, message: 'The mailbox is required', trigger: 'blur'},
            {type: 'email', message: 'Email format error', trigger: 'blur'}
          ],
          verCode: [
            {required: true, message: 'The verification code is required', trigger: 'blur'}
          ]
        },
        registerForm: {
          firstname: '',
          middlename: '',
          lastname: '',
          position: '',
          institution: '',
          city: '',
          country: '',
          address: '',
          email: '',
          verCode: ''
        },
        registerFormStr: {
          dataBody: {}
        },
        veryCodeStr: ''
      }
    },
    mounted: function () {
      this.queryCode()
    },
    methods: {
      saveForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.registerFormStr.dataBody = Object.assign({}, this.registerForm)
            this.$http.post(registerSave, this.registerFormStr).then(res => {
              if (res.data.resultCode === 'success') {
                this.$message({
                  showClose: true,
                  message: 'Register was successful,Please take care to check the mail！',
                  type: 'success'
                })
                this.resetForm()
                this.queryCode()
              } else {
                this.$message({
                  showClose: true,
                  message: 'Register has failed',
                  type: 'error'
                })
              }
              this.queryCode()
            })
          }
        })
      },
      queryCode() {
        this.$http.get(veryCode).then(res => {
          this.veryCodeStr = res.data.resultBody.verCodeImg
          document.getElementById('veryCode').src = 'data:image/jpg;base64,' + this.veryCodeStr
        })
      },
      resetForm () {
        this.$refs.registerForm.resetFields()
      }
    }
  }
</script>

<style scoped>
  .content-box{
    width: 75%;
    margin: 0 auto;
  }
  .el-card__header .clearfix span {
    font-size: 1.2rem;
  }

  .registerForm-button {
    width: 100%;
    text-align: center
  }

  .verify-code-box {
    width: 8rem;
    height: 2.2rem;
  }

  .verify-code {
    display: block;
    font-size: 0.6rem;
    width: 8rem;
    height: 2.2rem;
    color: #cccccc;
    cursor: pointer;
    border: 0.05rem solid #ffffff;
    vertical-align: middle;
  }
</style>
