<template>
  <el-container style="height: 100%">
    <el-header :style="{background: color? color : '#0066CC'}">
      <common-header></common-header>
    </el-header>
    <el-container>
      <el-aside width="auto" :style="{ height: height + 'px' }">
        <common-aside></common-aside>
      </el-aside>
      <el-main class="content" :style="{ height: height + 'px' }">
        <common-tag></common-tag>
        <div class="main">
          <transition  
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOutRight">
            <router-view></router-view>
          </transition>
        </div>
      </el-main>
    </el-container>
    <right-panel></right-panel>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
import RightPanel from '../components/rightPanel/index.vue'

import { mapState } from 'vuex'
export default {
  components: {
      CommonAside,
      CommonHeader,
      CommonTag,
      RightPanel
  },
  computed: {
    ...mapState({
      color: state => state.color.color
    }),
    // 计算高度
    height() {
      const ViewHeight = window.innerHeight - 56;
      return ViewHeight;
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    height: 56px !important;
    padding: 0px 0px !important;
  }

  .content {
    overflow: scroll;
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