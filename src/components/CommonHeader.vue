<template>
  <div class="header">
    <div class="left">
      <div class="title">
      <h1>{{projectitle}}</h1>
    </div>
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
      <div class="full" @click="full">
        <i class="iconfont icon-quanping"></i>
      </div>
      <div class="login">
        <div class="username">管理员</div>
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
import Cookies from "js-cookie"
import screenfull from 'screenfull'
import { mapState } from 'vuex'
import UserInfo from "@/components/userForm/userInfo"
import EditPassword from "@/components/userForm/userPassword"
export default {
  components: { UserInfo, EditPassword },
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
      projectitle: state => state.projectitle
    })
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    },
    userinfoCallback () {
      this.userInfoLog = false
    },
    passwordCallback () {
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
          Cookies.remove("token")
          location.reload()  //强制刷新页面
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .flex {
    cursor: pointer;
    margin-right: 20px;
  }
  .tools {
    display: flex;
    align-items: center;
    .full {
      cursor: pointer;
      padding-right: 10px;
    }
    .login {
      display: flex;
      align-items: center;
      .username {
        font-size: 14px;
        color: #fff;
      }
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
  width: 260px;
  transition: background-color ease 0.3s;
  font-weight: 500;
}

</style>

<style lang="scss">
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #fff !important;
    cursor: pointer;
}
</style>