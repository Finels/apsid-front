<template>
  <el-row>
    <div class="content-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Abstract Submission</span>
        </div>
        <el-col :span="16">
          <div class="abstact-form">
            <el-form ref="abstactForm" :model="abstactForm" :rules="rules" :inline="true">
              <el-form-item label="Forum" prop="forum">
                <el-select v-model="value" placeholder="Please choose forum">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Registration Code" prop="regCode">
                <el-input v-model.trim="abstactForm.regCode" placeholder="Please input Registration Code from email"></el-input>
              </el-form-item>
              <el-form-item label="Verification Code" prop="verCode">
                <el-input v-model.trim="abstactForm.verCode" placeholder="Please enter the verification code">
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
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false">
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传文件
                  </el-button>
                  <span>Upload document must be pdf or word, and file size less than 5M</span>
                </el-upload>
              </el-form-item>
              <el-form-item class="abstactForm-button">
                <el-button type="success" @click="saveAbstact('abstactForm')">Submit</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="7" :pull="1">
          <div class="abstact-download">
            <h1>Deadline</h1>
            <span>20 March, 2018</span>
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
  import {registerSave, upDataUrl} from '../../http/apiResource'
  export default {
    data () {
      return {
        rules: {
          forum: [
            {required: true, message: 'forum can not be null', trigger: 'blur'}
          ],
          regCode: [
            {required: true, message: 'registration code can not be null', trigger: 'blur'}
          ],
          verCode: [
            {required: true, message: 'verification code can not be null', trigger: 'blur'}
          ]
        },
        abstactForm: {
          forum: '',
          regCode: '',
          verCode: ''
        },
        upDataForm: {
          'isUpload': false,
          'upUrl': upDataUrl
        },
        fileList: [],
        options: [{
          value: '选项1',
          label: 'The main Symposium for PID'
        }, {
          value: '选项2',
          label: 'Rheumatology and Allergic Diseases'
        }, {
          value: '选项3',
          label: 'Respiratory and Infectious Disease'
        }, {
          value: '选项4',
          label: 'Hematology and Transplantation'
        }]
      }
    },
    methods: {
      saveAbstact(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post(registerSave, this.abstactForm).then(res => {
            })
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
      }
    }
  }
</script>

<style scoped>
  .content-box {
    width: 75%;
    margin: 0 auto;
  }
  .abstact-download {
    width: 100%;
    margin-top: 3rem;
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

  .abstact-download span {
    display: block;
    text-align: center;
    line-height: 3rem;
    font-family: sans-serif;
    color: #3a8ee6;
    font-size: 1.2rem;
  }

  .abstact-form span {
    color: #f15a22;
    font-family: sans-serif;
  }

  .abstactForm-button {
    margin-left: 10rem;
  }
  .el-card__header .clearfix span{
    font-size: 1.2rem;
  }
  .verify-code-box {
    width: 8rem;
    height: 2.2rem;
  }
</style>
