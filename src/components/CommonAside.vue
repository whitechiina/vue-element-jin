<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollage"
    background-color="#393D49"
    text-color="#ccc"
    active-text-color="#fff">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="isCollage? '' : '安全监控'" name="first">
        <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-for="(item, index) in hasChildren" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span v-show="!isCollage">{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="subItem.path"
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              @click="clickMenu(subItem)"
            >{{subItem.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-tab-pane>

      <el-tab-pane :label="isCollage? '' : '人员定位'" name="second">
        <el-menu-item :index="item.path" v-for="item in twoChildren" :key="item.path" @click="clickMenu(item)">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
      </el-tab-pane>
    </el-tabs>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      asideMenu: [
        {
          path: "/",
          label: "首页",
          name: 'home',
          icon: "s-home"
        },
        {
          path: "/video",
          label: "视频管理",
          name: 'video',
          icon: "video-play"
        },
        {
          path: "/user",
          label: "用户管理",
          name: 'user',
          icon: "user"
        },
        {
          path: "/setting",
          label: "设置",
          name: 'setting',
          icon: "user",
          children: [
            {
              path: "/page1",
              label: "折线图",
              name: 'page1', 
              icon: "setting"
            },
            {
              path: "/page2",
              label: "报表打印",
              name: 'page2', 
              icon: "setting"
            },
            {
              path: "/page3",
              label: "报表导出",
              name: 'page3', 
              icon: "setting"
            },
            {
              path: "/page4",
              label: "报表筛选",
              name: 'page4', 
              icon: "setting"
            },
            {
              path: "/page5",
              label: "综合报表",
              name: 'page5', 
              icon: "setting"
            }
          ]
        }
      ]
    };
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    },

    // 第二个Tab路由
    twoChildren() {
      return this.asideMenu.filter(item => item.children);
    },
    isCollage() {
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({name: item.name})
      this.$store.commit('selectMenu', item)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
.el-menu {
  height: 100%;
  border: none;
}

.el-tabs__header {
  width: 100%;
  position: absolute !important;
  bottom: 0 !important;
  margin: 0 0 1px;
}
.el-tabs__nav {
  width: 100%;
}

.el-tabs__item {
  width: 50%;
  padding: 0px;
  text-align: center;
  background-color: #0066cc;
  color: #fff;
}

.el-tabs__item .is-active {
  color: #fff;
}

.el-tabs__item .is-active {
  border: 1px solid #fff;
}

.el-tabs__active-bar {
  background-color: none !important;
  z-index: -1;
}

.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link, .el-breadcrumb__inner {
  color: #fff;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
}

.el-menu-item.is-active {
   background-color: #2299EE !important;//你要修改的颜色
}

.el-menu-item {
  height: 45px !important;
  line-height: 45px !important;
}

.el-submenu__title {
  height: 45px !important;
  line-height: 45px !important;
}
</style>