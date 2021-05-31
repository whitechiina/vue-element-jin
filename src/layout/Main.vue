<template>
  <el-container style="height: 100%">
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-main>
        <common-tag></common-tag>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    }
}
</script>

<style lang="scss" scoped>
  .el-header {
    height: 56px !important;
    background-color: #0066CC;
  }
</style>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
  .main {
    padding: 0px 20px;
  }
</style>