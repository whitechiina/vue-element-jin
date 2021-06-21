<template>
  <div id="login">
    <div class="loginConbox">
      <div class="loginBox">
        <div class="loginCon">
          <div class="title">
            <p>Vue-Element-Jin后台管理系统</p>
          </div>
          <div class="pane">
            <el-card shadow="always" class="login-module" v-if="smdl">
              <div slot="header" class="clearfix formTitlt">
                <span>账号登录</span>
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
                  <div class="yzm">
                    <el-input type="text" v-model="loginForm.code" auto-complete="off"
                    placeholder="请输入验证码"></el-input>
                  <!--验证码组件-->
                  <div @click=refreshCode>
                    <s-identify :identifyCode="identifyCode"></s-identify>
                  </div>
                  </div>
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
import SIdentify from './sidentify'
export default {
  components: { SIdentify },
  data () {
    return {
      color: 'red',
      smdl: true,
      identifyCodes: "1234567890",
      identifyCode: "",
      loginForm: {
        username: "vue-element-jin",
        password: "123456",
        code:""//text框输入的验证码
      }
    }
  },
  mounted(){
    this.loginForm.code = "";
    this.makeCode(this.identifyCodes, 4);
    this.message();
  },
  methods: {
    submitForm () {
      let that = this
      if (this.loginForm.username === "" || this.loginForm.password === "" || this.loginForm.code === "") {
        this.$message({
          showClose: true,
          message: "账号或密码、验证码不能为空",
          type: "error"
        })
        return false
      } else if (this.loginForm.code !== this.identifyCode) {
        this.$message({
          showClose: true,
          message: "验证码错误",
          type: "error"
        })
        this.refreshCode();
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
          that.$router.push({path: "/home"})
        }).catch(res => {
          that.$message({
            showClose: true,
            message: res,
            type: "error"
          })
        })
      }
    },

    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
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
    overflow: hidden;
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

      padding: 50px 0 118px;

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
          p {
            margin-bottom: 0px;
            text-align: center;
          }
          &:first-child{
            font-size: 44px;
            margin-bottom: 120px;
          }
        }
        .pane {
          margin: 0 auto;
        }
        .login-module {
          width: 380px;
          height: 380px;
          margin-top: 10px;
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

  .yzm {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
