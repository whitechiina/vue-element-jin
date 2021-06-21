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
            <svg t="1624261191625" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1177" width="200" height="200"><path d="M682.215454 981.446137c-25.532318 0-42.553863-17.021545-42.553864-42.553864v-165.960067c4.255386-34.043091-8.510773-59.575409-29.787704-80.852341-12.766159-12.766159-17.021545-29.787704-8.510773-42.553864 4.255386-17.021545 21.276932-25.532318 34.043091-29.787704 123.406204-12.766159 238.301635-55.320023 238.301635-255.323181 0-46.80925-17.021545-93.6185-51.064636-131.916976-12.766159-12.766159-12.766159-29.787704-8.510772-42.553864 12.766159-34.043091 12.766159-68.086182 4.255386-102.129272-21.276932 4.255386-55.320023 17.021545-110.640045 55.320022-8.510773 8.510773-21.276932 8.510773-34.043091 4.255387-89.363113-25.532318-187.236999-25.532318-276.600112 0-12.766159 4.255386-25.532318 4.255386-38.298477-4.255387C307.741455 104.836549 269.442978 92.07039 248.166047 87.815004c-8.510773 34.043091-8.510773 68.086182 4.255386 102.129272 4.255386 17.021545 4.255386 34.043091-8.510773 42.553864-34.043091 38.298477-51.064636 85.107727-51.064636 131.916976 0 200.003158 114.895431 242.557022 238.301635 255.323181 17.021545 0 29.787704 12.766159 34.043091 29.787704 4.255386 17.021545 0 34.043091-8.510773 42.553864-21.276932 21.276932-29.787704 46.80925-29.787704 76.596954v165.960068c0 25.532318-17.021545 42.553863-42.553863 42.553863s-42.553863-17.021545-42.553864-42.553863v-72.341568c-127.66159 21.276932-182.981613-51.064636-221.28009-97.873886-17.021545-21.276932-29.787704-38.298477-46.80925-42.553864-21.276932-4.255386-38.298477-29.787704-29.787704-51.064636 4.255386-21.276932 29.787704-38.298477 51.064636-29.787704 42.553863 12.766159 68.086182 42.553863 93.6185 72.341568 34.043091 46.80925 63.830795 80.852341 153.193908 63.830795v-4.255386c0-25.532318 4.255386-55.320023 12.766159-76.596955-119.150818-25.532318-246.812408-102.129272-246.812408-327.664748 0-63.830795 21.276932-123.406204 59.575409-170.215454-17.021545-59.575409-12.766159-114.895431 12.766159-170.215454 4.255386-12.766159 12.766159-21.276932 25.532318-25.532318 17.021545-4.255386 72.341568-12.766159 187.236999 59.575409 93.6185-21.276932 191.492386-21.276932 280.855499 0 110.640045-72.341568 170.215454-63.830795 187.236999-59.575409 12.766159 4.255386 21.276932 12.766159 25.532319 25.532318 21.276932 55.320023 25.532318 110.640045 12.766159 165.960067 38.298477 46.80925 59.575409 106.384659 59.575408 170.215454 0 242.557022-144.683136 306.387817-246.812408 331.920135 8.510773 25.532318 12.766159 55.320023 12.766159 80.852341V938.892273c0 25.532318-17.021545 42.553863-42.553863 42.553864z" p-id="1178" fill="#ffffff"></path></svg>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="https://gitee.com/yao_wei_jin/Vue-Element-Jin">开源中国</el-dropdown-item>
            <el-dropdown-item command="https://github.com/whitechiina">同性交友</el-dropdown-item>
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
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .github:hover {
      background-color: #9493933d;
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
      background-color: #9493933d;
    }
    .full {
      font-size: 20px;
      cursor: pointer;
      padding: 0px 10px;
      line-height: 56px;
      display: inline-block;
    }
    .full:hover {
      background-color: #9493933d;
    }
    .language:hover {
      height: 56px;
      line-height: 54px;
      background-color: #9493933d;
    }
    .login:hover {
      background-color: #9493933d;
      height: 56px;
      line-height: 56px;
    }
    
    .login {
      display: flex;
      align-items: center;
      padding: 0px 10px;
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