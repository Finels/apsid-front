<template>
  <div class="login-box" id="LoginId">
    <el-row>
      <el-col :span="24">
        <div class="login-form">
          <span>欢迎登录Aspid</span>
          <br>
          <div class="login-form-box">
            <el-input v-model.trim="loginForm.username" placeholder="请输入用户名" @keyup.enter.native="query">
              <template slot="prepend"><i class="fa fa-user fa-lg"></i></template>
            </el-input>
          </div>
          <br>
          <div class="login-form-box">
            <el-input type="password" v-model.trim="loginForm.password" placeholder="请输入密码" @keyup.enter.native="query">
              <template slot="prepend"><i class="fa fa-lock fa-lg"></i></template>
            </el-input>
          </div>
          <br>
          <div class="login-form-button" size="medium">
            <el-button type="primary" style="width: 100%" @click="loginQuery">
              <span style="font-size: 1.2rem">登 录</span></el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  /**
   * Created by xzc
   * 描述:
   */
  import {} from '../../../http/apiResource'
  export default {
    data() {
      return {
        rules: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        },
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    mounted: function () {
      this.setStyle()
    },
    methods: {
      loginQuery() {
       // let loginData = Object.assign({}, this.loginForm)
        location.href = '#/home'
       // this.$http.post(loginQuery, loginData).then((response) => {
        //  location.href = '#/home'
       // })
      },
      setStyle() {
        let hetightStr = window.screen.height
        document.getElementById('LoginId').style.height = hetightStr + 'px'
      }
    }
  }
</script>

<style>
  .login-box {
    width: 100%;
    background-size: 100% 100%;
  }

  .login-form {
    width: 30%;
    margin: 14% auto;
    background: rgba(0, 0, 0, 0.4);
    padding: 2%;
    border-radius: 1%;
    border: 1px solid #ccc
  }

  .login-form-box {
    margin: 5% 0;
  }

  .login-form span {
    color: #ffffff;
    font-size: 2rem;
    display: block;
    text-align: center;
  }

  .login-form-button {
    width: 35%;
    margin: 0 auto;
  }
</style>
