<template>
  <div class="header">
    <div class="title">
      <h1>澄城县煤炭管理局安全联网系统</h1>
    </div>
    <div class="flex" @click="collapseMenu">
      <i class="iconfont icon-indent"></i>
    </div>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{current.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .flex {
    cursor: pointer;
    margin-right: 20px;
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