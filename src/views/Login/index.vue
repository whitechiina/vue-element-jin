<template>
  <div id="login">
    <div class="loginConbox">
      <div class="loginBox">
        <div class="loginCon">
          <div class="title">
            <p>澄城县煤炭管理局安全联网系统</p>
          </div>
          <div class="pane">
            <el-card shadow="always" class="login-module" v-if="smdl">
              <div slot="header" class="clearfix formTitlt">
                <span>密码登录</span>
                <span class="titIconbox">
                <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
                <i class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>
              </span>
              </div>
              <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item>
                  <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入登录账号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="password" v-model="loginForm.password" auto-complete="off"
                            placeholder="请输入登录密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
                </el-form-item>
                <p class="smalltxt">
                  <router-link class="a" to="#">忘记密码</router-link>
                  <router-link class="a" to="#">注册账号</router-link>
                </p>
              </el-form>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: 'red',
      smdl: true,
      loginForm: {
        username: "vue-jinadmin",
        password: "123456"
      }
    }
  },
  methods: {
    submitForm () {
      let that = this
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error"
        })
        return false
      } else {
        // 真实请求参考
        // this.$request.fetchLogin({
        //   username: that.loginForm.username,
        //   password: that.loginForm.password
        // }).then(res => {
        //   that.$restBack(res.data, () => {
        //     that.$store.dispatch("setToken", res.data.data.access_token).then(res => {
        //       that.$router.push({path: "/"})
        //     })
        //   }, "登录成功")
        // }).catch((err) => {
        //   console.log(err)
        // })
        // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准

          that.$store.dispatch("setToken", that.loginForm.username).then(() => {
          that.$router.push({path: "/"})
        }).catch(res => {
          that.$message({
            showClose: true,
            message: res,
            type: "error"
          })
        })
      }
    },
    message () {
      const h = this.$createElement
      this.$notify({
        title: "账号密码",
        message: h("i", {style: "color: teal"}, "账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 cookie"),
        duration: 6000
      })
    }
  },
  mounted () {
    this.message()
  }
}
</script>
<style lang="scss">
  #login {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/images/bg.jpg');
    background-size: cover;
    background-position: center left;
    z-index: 9999;
    .loginConbox{
    }
    .logo{
      margin-left: 30px;
      width: 500px;
      float: left;
      height: 40px;
      padding-top: 10px;
      img{
        height: 100%;
      }
    }

    .loginBox {
      .iconcolor {
        color: #0066CC;
      }

      padding: 74px 0 118px;

      .loginCon {
        width: 990px;
        margin: auto;
        position: relative;

        .el-card__header {
          border-bottom: 0px;
        }
        .title{
          font-weight: 600;
          color: #fff;
          width: 900px;
          margin-top: 0px;
          text-align: center;
          margin: 0 auto;
          .p {
            text-align: center;
          }
          &:first-child{
            font-size: 44px;
            margin-bottom: 140px;
          }
        }
        .pane {
          margin: 0 auto;
        }
        .login-module {
          width: 380px;
          height: 325px;
          margin-top: 60px;
          border: none;
          margin: 0 auto;
          right: 0;

          .formTitlt {
            font-size: 18px;
            font-weight: 400;

            .titIconbox {

              .pointer {
                cursor: pointer;
              }
            }
          }

          .smalltxt {
            text-align: right;

            .a {
              text-decoration: none;
              color: #999999;
              font-size: 12px;
              margin-left: 8px;
            }
          }
        }

        .el-form-item__content {
          margin-left: 0px !important;

          .subBtn {
            width: 100%;
          }
        }
      }

      .el-input__inner, .el-button, .el-card, .el-message {
        border-radius: 0px !important;
      }

      .el-form-item__content .ico {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        width: 40px;
        height: 39px;
        text-align: center;
        border-right: 1px solid #ccc;
      }

      .ewmbox {
        width: 100%;
        height: 240px;
        margin-top: -25px;

        .ewm {
          width: 140px;
          height: 140px;
          margin: 20px auto;

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }

        .ewmicon {
          width: 140px;
          margin: 20px auto 0;

          .iconfont {
            float: left;
          }

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }
      }
    }
  }
</style>
