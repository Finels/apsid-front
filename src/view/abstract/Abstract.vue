<template>
  <el-row>
    <div class="content-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Abstract Submission</span>
        </div>
        <el-col :span="17">
          <div class="abstact-form">
            <el-form ref="abstactForm" :model="abstactForm" :rules="rules" :inline="true">
              <el-form-item label="Forum" prop="forum">
                <el-select v-model.trim="abstactForm.forum" placeholder="please choose forum">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Registration Code" prop="regCode">
                <el-input v-model.number="abstactForm.regCode" placeholder="please input number of RN Code"></el-input>
              </el-form-item>
              <el-form-item label="Verification Code" prop="verCode">
                <el-input v-model.trim="abstactForm.verCode" placeholder="please input the verification code">
                </el-input>
              </el-form-item>
              <el-form-item>
                <div class="verify-code-box">
                  <img id="veryCode" @click="queryCode" title="Not clear, change one" class="verify-code"/>
                </div>
              </el-form-item>
              <el-form-item label="Upload Abstract">
                <el-upload
                  ref="upload"
                  :action="upDataForm.upUrl"
                  :data="abstactForm"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :limit="1"
                  :file-list="fileList"
                  :auto-upload="false"
                  :beforeUpload="handleBefore"
                  accept=".doc, .docx, .pdf"
                  :onError="uploadError"
                  :onSuccess="uploadSuccess">
                  <el-button slot="trigger" size="small" type="primary" :disabled=isvibel style="font-weight: bold;">
                    select file
                  </el-button>
                  <div slot="tip" class="el-upload__tip tipc">
                    upload document must be pdf or word, and the size of file less than 5M
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item class="abstactForm-button">
                <el-button type="success" @click="submitUpload"
                           style="font-family: Arial;font-weight: bold;">Upload
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="7" :pull="1">
          <div class="abstact-download">
            <h1>Deadline</h1>
            <h3>20 March, 2018</h3>
            <span style="color: #8c939d;text-align: center;font-size: 0.8rem"><span
              style="color: #F56C6C;display: inline;font-size: 0.8rem">*</span>Upload again will cover the last submission.</span>
          </div>
          <div class="abstact-download">
            <h1>Abstact Template</h1><a href="../../../static/download/Congressabstract.doc" target="_blank">
            <span class="content-main-font-span">Congress Abstract.doc</span></a>
          </div>
        </el-col>
      </el-card>
    </div>
  </el-row>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by xzc
   * 描述:
   */
  import {veryCode, upDataUrl} from '../../http/apiResource'
  export default {
    data () {
      return {
        rules: {
          forum: [
            {required: true, message: "forum can't be null", trigger: 'blur'}
          ],
          regCode: [
            {required: true, message: "RN Code from email can't be null", trigger: 'blur'},
            {type: 'number', message: 'RN Code must be number'}
          ],
          verCode: [
            {required: true, message: "verification code can't be null", trigger: 'blur'}
          ]
        },
        options: [{
          value: '1',
          label: 'The main Symposium for PID'
        }, {
          value: '2',
          label: 'Rheumatology and Allergic Diseases'
        }, {
          value: '3',
          label: 'Respiratory and Infectious Disease'
        }, {
          value: '4',
          label: 'Hematology and Transplantation'
        }],
        abstactForm: {
          forum: '',
          regCode: '',
          verCode: ''
        },
        upDataForm: {
          'isUpload': false,
          'upUrl': upDataUrl
        },
        isvibel: true,
        fileList: []
      }
    },
    mounted: function () {
      this.queryCode()
    },
    watch: {
      'abstactForm.forum': 'seletFile',
      'abstactForm.regCode': 'seletFile',
      'abstactForm.verCode': 'seletFile'
    },
    methods: {
      seletFile() {
        this.$refs['abstactForm'].validate((valid) => {
          if (valid) {
            this.isvibel = false
          }
        })
      },
      submitUpload() {
        this.$refs.upload.submit()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      queryCode() {
        this.$http.get(veryCode).then(res => {
          this.veryCodeStr = res.data.resultBody.verCodeImg
          document.getElementById('veryCode').src = 'data:image/jpg;base64,' + this.veryCodeStr
        })
      },
      handleBefore(file) {
        const doc = file.name.split('.')[1] === 'doc'
        const docx = file.name.split('.')[1] === 'docx'
        const pdf = file.name.split('.')[1] === 'pdf'
        if (!doc && !docx && !pdf) {
          this.$message({
            showClose: true,
            message: 'The file must be word or pdf format!',
            type: 'warning'
          })
        }
        const isLt5M = file.size / 1024 / 1024 < 5
        if (!isLt5M) {
          this.$message({
            showClose: true,
            message: 'The file size can\'t exceed 5M!',
            type: 'warning'
          })
        }
        return (doc || docx || pdf) && isLt5M
      },
      uploadError(response, file, fileList) {
        this.$message({
          showClose: true,
          message: 'The file upload failed!',
          type: 'error'
        })
      },
      uploadSuccess(response, file, fileList) {
        this.$message({
          showClose: true,
          message: 'The file upload success!',
          type: 'success'
        })
        location.href = '#/'
        this.$ref.upload.clearFiles()
        this.queryCode()
      },
      resetForm () {
        this.$refs.abstactForm.resetFields()
      }
    }
  }
</script>

<style scoped>
  .content-box {
    width: 75%;
    margin: 0 auto;
  }

  .abstact-form .el-select {
    width: 12.6rem;
  }
  .abstact-download {
    width: 100%;
    margin-bottom: 2rem;
  }

  .abstact-download h1 {
    display: block;
    text-align: center;
    color: #013763;
    font-size: 1.1rem;
    line-height: 3rem;
    font-family: sans-serif;
    border-bottom: 0.1rem solid #f15a22;
  }

  .abstact-download h3 {
    display: block;
    text-align: center;
    line-height: 3rem;
    font-family: sans-serif;
    color: #3a8ee6;
    font-size: 1.2rem;
  }

  .tipc {
    color: #E6A23C;
    font-family: sans-serif;
    margin-top: 0;
  }

  .abstactForm-button {
    margin-left: 10rem;
  }

  .el-card__header .clearfix span {
    font-size: 1.2rem;
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

  .content-main-font-span {
    width: 100%;
    display: block;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
    color: #e9669c;
    font-family: sans-serif;
    text-decoration: underline;
  }
</style>
