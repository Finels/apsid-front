<template>
  <el-row>
    <div class="content-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>摘要模板</span>
        </div>
        <el-col :span="16">
          <div class="abstact-form">
            <el-form ref="abstactForm" :model="abstactForm" :rules="rules" :inline="true">
              <el-form-item label="姓 名" prop="userName">
                <el-input v-model="abstactForm.userName"></el-input>
              </el-form-item>
              <el-form-item label="单 位" prop="company">
                <el-input v-model="abstactForm.company"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="telephone">
                <el-input v-model.trim="abstactForm.telephone" placeholder="请输入手机或座机号"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model.trim="abstactForm.email" placeholder="请输入电子邮箱"></el-input>
              </el-form-item>
              <el-form-item label="上传论文">
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
                  <span>上传文件必须是PDF或者word且大小不能超过10M</span>
                </el-upload>
              </el-form-item>
              <el-form-item class="abstactForm-button">
                <el-button type="success" @click="saveAbstact('abstactForm')">提交信息</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="abstact-download">
            <h1>摘要模板下载地址：</h1>
            <a href="javascript:void(0)"><span>摘要模板 - 中文版.docx</span></a>
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
          userName: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          company: [
            {required: true, message: '单位不能为空', trigger: 'blur'}
          ],
          telephone: [
            {required: true, message: '联系方式不能为空', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '电子邮箱不能为空', trigger: 'blur'}
          ]
        },
        abstactForm: {
          userName: '',
          company: '',
          telephone: '',
          email: ''
        },
        upDataForm: {
          'isUpload': false,
          'upUrl': upDataUrl
        },
        fileList: []
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
    margin-top: 5rem;
  }

  .abstact-download h1 {
    display: block;
    text-align: center;
    color: #013763;
    font-size: 1.2rem;
    line-height: 4rem;
    font-family: sans-serif;
    border-bottom: 0.1rem solid #f15a22;
  }

  .abstact-download span {
    display: block;
    text-align: center;
    line-height: 3rem;
    font-family: sans-serif;
    color: #3a8ee6;
    font-size: 0.9rem;
  }

  .abstact-form span {
    color: #f15a22;
    font-family: sans-serif;
  }

  .abstactForm-button {
    margin-left: 10rem;
  }
</style>
