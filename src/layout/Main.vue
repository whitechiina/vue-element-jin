<template>
  <el-container style="height: 100%">
    <el-header class="header" :style="{background: color? color : '#0066CC !important' }">
      <common-header></common-header>
    </el-header>
    <el-container>
      <el-aside width="auto" :style="{ height: height + 'px' }">
        <common-aside></common-aside>
      </el-aside>
      <el-main class="content" :style="{ height: height + 'px' }">
        <common-tag></common-tag>
        <div class="content-main" :class="tagFlag? 'exist':''">
          <transition  
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOutRight">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
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
      color: state => state.color.color,
      tagFlag: state => state.tab.tagFlag
    }),
    height() {
      const intViewportHeight = window.innerHeight - 56
      return intViewportHeight
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/handle.scss";
  .header {
    @include bg_color("background_color1");
  }
  .el-header {
    height: 56px !important;
    padding: 0px 0px !important;
  }

  .content {
    overflow: scroll;
    background-color: #f0f2f5;
  }
</style>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
  .content-main {
    padding: 0px 20px;
    margin-top: 60px;
    /* 路由背景色 */
  }
  .exist {
    margin-top: 20px !important;
  }
</style>