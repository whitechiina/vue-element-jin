<template>
  <div class="header">
    <div class="left">
      <router-link to="/">
        <div class="logo" :class="!isCollapse? 'havewidth':'nowidth'">
          <div class="picture">
            <img src="../assets/images/logo.png">
          </div>
          <div class="title" v-show="!isCollapse">
            <h1>{{projectitle? projectitle : '可在右侧设置'}}</h1>
          </div>
        </div>
      </router-link>
      <div class="flex" @click="collapseMenu">
        <i class="iconfont icon-indent"></i>
      </div>
      <div class="tips">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="current.path" v-if="current">
            {{current.label}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tools">
      <div class="github">
        <el-dropdown @command="dosc">
          <span class="el-dropdown-link">
            <svg t="1623035437746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="30" height="30"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#4186F5" p-id="2300"></path><path d="M611.944 302.056c0-15.701 2.75-30.802 7.816-44.917a384.238 384.238 0 0 0-186.11 2.956c-74.501-50.063-93.407-71.902-107.975-39.618a136.243 136.243 0 0 0-3.961 102.287 149.515 149.515 0 0 0-39.949 104.806c0 148.743 92.139 181.875 179.961 191.61a83.898 83.898 0 0 0-25.192 51.863c-40.708 22.518-91.94 8.261-115.181-32.058a83.117 83.117 0 0 0-60.466-39.98s-38.871-0.361-2.879 23.408a102.97 102.97 0 0 1 43.912 56.906s23.398 75.279 133.531 51.863v65.913c0 10.443 13.548 42.63 102.328 42.63 71.275 0 94.913-30.385 94.913-42.987V690.485a90.052 90.052 0 0 0-26.996-72.03c83.996-9.381 173.328-40.204 179.6-176.098a164.706 164.706 0 0 1-21.129 1.365c-84.07 0-152.223-63.426-152.223-141.666z" fill="#FFFFFF" p-id="2301"></path><path d="M743.554 322.765a136.267 136.267 0 0 0-3.961-102.289s-32.396-10.445-107.979 39.618a385.536 385.536 0 0 0-11.853-2.956 132.623 132.623 0 0 0-7.816 44.917c0 78.24 68.152 141.667 152.222 141.667 7.171 0 14.222-0.472 21.129-1.365 0.231-5.03 0.363-10.187 0.363-15.509a149.534 149.534 0 0 0-42.105-104.083z" fill="#FFFFFF" opacity=".4" p-id="2302"></path></svg>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="https://gitee.com/yao_wei_jin/Vue-Element-Jin">gitee地址</el-dropdown-item>
            <el-dropdown-item command="https://github.com/whitechiina">github地址</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="refresh" @click="refresh">
        <i class="el-icon-refresh"></i>
      </div>
      <div class="full" @click="full">
        <i class="iconfont icon-quanping"></i>
      </div>
      <div class="language">
        <CommonLang></CommonLang>
      </div>
      <div class="login">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            比克大魔王<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">基本资料</el-dropdown-item>
            <el-dropdown-item command="password">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="userpic">
          <img src="https://nirongxu.github.io/vue-xuAdmin/dist/static/images/icon.jpg">
        </div>
      </div>
    </div>
    
    <!-- 编辑组件 -->
    <UserInfo v-if="userInfoLog" :dialogVisible="userInfoLog" :title="title" @userinfoCallback="userinfoCallback"></UserInfo>
    <EditPassword v-if="passwordLog" :dialogVisible="passwordLog" :title="title" @passwordCallback="passwordCallback"></EditPassword>
  </div>
</template>

<script>
import { clearCookie } from '@/utils'
import screenfull from 'screenfull'
import { mapState } from 'vuex'
import UserInfo from "@/components/userForm/userInfo"
import EditPassword from "@/components/userForm/userPassword"
import CommonLang from "@/components/CommonLang"
export default {
  components: { UserInfo, EditPassword, CommonLang },
  data () {
    return {
      isFullscreen: false,
      userInfoLog: false,
      passwordLog: false,
      title: ''
    }
  },
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu,
      isCollapse: state => state.tab.isCollapse,
      projectitle: state => state.projectitle
    })
  },
  methods: {
    // 刷新页面
    refresh() {
      const { fullPath } = this.$route
    console.log(fullPath)
      this.$router.replace({
        path: '/redirect' + fullPath
      })
    },
    collapseMenu() {
      this.$store.commit('collapseMenu')
    },
    userinfoCallback (Form) {
      console.log(Form)
      this.userInfoLog = false
    },
    passwordCallback (Form) {
      console.log(Form)
      this.passwordLog = false
    },
    full(){
      if (!screenfull.isEnabled) {
        this.$message({
          message: '浏览器不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    dosc(href) {
      window.open(href) 
    },
    handleCommand(command) {
      switch (command) {
        case 'info':
          this.title = '编辑资料'
          this.userInfoLog = true
          break;
        case 'password':
          this.title = '修改密码'
          this.passwordLog = true
          break;
        case 'logout':
          clearCookie("token")
          location.reload()  //强制刷新页面
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 0px;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      display: flex;
    }
    .havewidth {
      width: 100%;
      max-width: 240px;
      transition: all .25s;
      padding-left: 6px;
    }
    .nowidth {
      width: 64px;
      max-width: 64px;
      transition: all .25s;
    }
  }
  .picture {
    width: 64px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    img { 
      width: 40px;
      height: 40px;
    }
  }
  .flex {
    cursor: pointer;
    margin: 0px 20 0px 0px;
  }
  .tips {
    width: 300px;
    height: 100%;
    padding-left: 20px;
  }
  .tools {
    display: flex;
    align-items: center;
    height: 56px;
    .github {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 56px;
    }
    .github:hover {
      background-color: #005bc1;
    }
    .refresh {
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      padding: 0px 10px;
      height: 56px;
      line-height: 56px;
    }
    .refresh:hover {
      background-color: #005bc1;
    }
    .full {
      font-size: 20px;
      cursor: pointer;
      padding: 0px 10px;
      line-height: 56px;
      display: inline-block;
    }
    .full:hover {
      background-color: #005bc1;
    }
    .language:hover {
      height: 56px;
      line-height: 54px;
      background-color: #005bc1;
    }
    .login:hover {
      background-color: #005bc1;
      height: 56px;
      line-height: 56px;
    }
    
    .login {
      display: flex;
      align-items: center;
      .userpic {
        width: 40px;
        height: 40px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }
}
h1 {
  color: #fff;
  font-size: 18px;
  width: 194px;
  line-height: 56px;
  transition: background-color ease 0.3s;
  font-weight: 500;
  padding: 0px 10px;
  box-sizing: border-box;
}

</style>

<style lang="scss">
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #fff !important;
    cursor: pointer;
}
</style>