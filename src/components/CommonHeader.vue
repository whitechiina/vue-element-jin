<template>
  <div class="header">
    <div class="left">
      <div class="title">
      <h1>澄城县煤炭管理局安全联网系统</h1>
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
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isFullscreen: false
    }
  },
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
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
    float: right;
    .full {
      cursor: pointer;
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