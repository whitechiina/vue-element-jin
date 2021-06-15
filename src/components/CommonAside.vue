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
      <el-tab-pane :label="isCollage? '安全' : '安全监控'" name="first">
        <el-menu-item :index="item.path + ''" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
          <i :class="'el-icon-' + item.icon"></i>
          <span  v-show="!isCollage">{{ $t(`routeName.${item.label}`) }}</span>
        </el-menu-item>
        <el-submenu :index="item.path + ''" v-for="(item, index) in hasChildren" :key="index">
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span v-show="!isCollage">{{ $t(`routeName.${item.label}`) }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="subItem.path"
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              @click="clickMenu(subItem)"
            >
            <i :class="'el-icon-' + subItem.icon"></i>
            {{subItem.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-tab-pane>

      <el-tab-pane :label="isCollage? '人员' : '人员定位'" name="second">
        <el-menu-item :index="item.path + ''" v-for="item in PeopleChildren" :key="item.path" @click="clickMenu(item)">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="item.path + ''" v-for="(item, index) in hasPeopleChildren" :key="index">
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
            >
            <i :class="'el-icon-' + subItem.icon"></i>
            {{subItem.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
          label: "home",
          name: 'home',
          icon: "s-home"
        },
        {
          path: "/server",
          label: "network",
          name: 'server',
          icon: "loading"
        },
        {
          path: "/user",
          label: "user",
          name: 'user',
          icon: "user"
        },

        // 设置
        {
          path: "/setting",
          label: "statement",
          name: 'setting',
          icon: "edit-outline",
          children: [
            {
              path: "/page2",
              label: "报表打印",
              name: 'page2',
              icon: "loading"
            },
            {
              path: "/page3",
              label: "报表导出",
              name: 'page3',
              icon: "edit-outline"
            },
            {
              path: "/page4",
              label: "报表筛选",
              name: 'page4'
            },
            {
              path: "/page5",
              label: "综合报表",
              name: 'page5'
            }
          ]
        },

        // 组件
        {
          label: "components",
          name: 'VideoView',
          icon: "menu",
          children: [
            {
              path: "/page1",
              label: "折线图",
              name: 'page1'
            },
            {
              path: "/VideoView",
              label: "视频组件",
              name: 'VideoView', 
            },
            {
              path: "/CropperImage",
              label: "裁剪组件",
              name: 'CropperImage', 
              icon: "edit-outline"
            },
            {
              path: "/Scroll",
              label: "无缝滚动",
              name: 'Scroll', 
            },
            {
              path: "/404",
              label: "404页面",
              name: 'notFound'
            },
            {
              path: "/table",
              label: "表格组件",
              name: 'table'
            }
          ]
        }
      ],

      // 第二列
      asideMenuTwo: [
        {
          path: "/setting",
          label: "人员定位",
          name: 'setting',
          icon: "user",
          children: [
            {
              path: "/pageone",
              label: "人员定位综合表格"
            },
            {
              path: "/pagetwo",
              label: "历史人员定位信息"
            }
          ]
        }, 
        {
          path: "/setting2",
          label: "橙合煤矿人员定位",
          name: 'setting',
          icon: "user",
          children: [
            {
              path: "/pagethree",
              label: "人员分布",
              name: 'page1'
            },
            {
              path: "/page2",
              label: "今日上下井人员",
              name: 'page2'
            },
            {
              path: "/page3",
              label: "当前井下人员",
              name: 'page3'
            },
            {
              path: "/page4",
              label: "历史井下人员",
              name: 'page4'
            },
            {
              path: "/page5",
              label: "当前站点人员",
              name: 'page5'
            },
            {
              path: "/page6",
              label: "历史站点人员",
              name: 'page6'
            },
            {
              path: "/page7",
              label: "当前区域人员",
              name: 'page7'
            },
            {
              path: "/page8",
              label: "当前井下超时人员",
              name: 'page8'
            },
            {
              path: "/page9",
              label: "当前人员位置",
              name: 'page9'

            },
            {
              path: "/page10",
              label: "人员轨迹",
              name: 'page10'

            },
            {
              path: "/page11",
              label: "人员信息",
              name: 'page11'
            }
          ]
        },
        {
          path: "/setting3",
          label: "安里煤矿人员定位",
          name: 'setting',
          icon: "user",
          children: [
            {
              path: "/pagethree",
              label: "人员分布",
              name: 'page1'
            },
            {
              path: "/page2",
              label: "今日上下井人员",
              name: 'page2'
            },
            {
              path: "/page3",
              label: "当前井下人员",
              name: 'page3'
            },
            {
              path: "/page4",
              label: "历史井下人员",
              name: 'page4'
            },
            {
              path: "/page5",
              label: "当前站点人员",
              name: 'page5'
            },
            {
              path: "/page6",
              label: "历史站点人员",
              name: 'page6'
            },
            {
              path: "/page7",
              label: "当前区域人员",
              name: 'page7'
            },
            {
              path: "/page8",
              label: "当前井下超时人员",
              name: 'page8'
            },
            {
              path: "/page9",
              label: "当前人员位置",
              name: 'page9'

            },
            {
              path: "/page10",
              label: "人员轨迹",
              name: 'page10'

            },
            {
              path: "/page11",
              label: "人员信息",
              name: 'page11'
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
    PeopleChildren() {
      return this.asideMenuTwo.filter(item => !item.children);
    },
    hasPeopleChildren() {
      return this.asideMenuTwo.filter(item => item.children);
    },

    // 伸缩栏
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
.el-aside {
  overflow: scroll;
}

.el-menu {
  height: 100%;
  border: none;
}

.el-tabs__header {
  width: 100%;
  margin: 0 0 1px;
  z-index: 999;
}

.el-tabs__nav {
  width: 100%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

#tab-first {
  line-height: 44px;
  height: 44px !important;
  border-right: 1px solid #fff;
}

#tab-second {
  line-height: 44px;
  height: 44px !important;
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
   background-color: #0066cc !important;//你要修改的颜色
}

.el-menu-item {
  height: 55px !important;
  line-height: 55px !important;
}

.el-submenu__title {
  height: 55px !important;
  line-height: 55px !important;
}
</style>