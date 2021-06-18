<template>
  <div id="tags" v-if="!tagflag" :style="{width: tagwidth + 'px'}">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @click="changeMenu(tag)"
      @close="handleClose(tag)"
      :effect="$route.name === tag.name? 'dark': 'plain'"
    >
    <span class="tag-item" @contextmenu.prevent="openMenu($event,tag)">
      {{ $t(`routeName.${tag.label}`) }}
    </span>
    <!-- 右键菜单 -->
    <ul v-show="visible" :style="{left:left+'px',top: 4 +'px'}" class="contextmenu">
      <li @click="allClose(tag)">关闭所有</li>
    </ul>
    </el-tag>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      visible: false,
      top: 0,
			left: 0,
      inputVisible: false,
      inputValue: ""
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollInit()
    })
  },
  computed: {
    ...mapState({
        tags: state => state.tab.tabList,
        tagflag: state => state.tab.tagFlag,
        isCollapse: state => state.tab.isCollapse
    }),

    tagwidth() {
      if (this.isCollapse) {
        let intViewportHeight = window.innerWidth - 64
        return intViewportHeight
      } else {
        let intViewportHeight = window.innerWidth - 242
        return intViewportHeight
      }
    }
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  methods: {
    ...mapMutations({
        close: 'closeTab',
        all: 'allTab'
    }),

    // 关闭单个
    handleClose(tag) {
      this.close(tag)
    },

    // 关闭所有
    allClose(tag) {
      this.all(tag)
      this.$router.push({name: 'home'})
    },
    
    changeMenu(item) {
      this.$router.push({name: item.name})
      this.$store.commit('selectMenu', item)
    },

    openMenu(e) {
      const menuMinWidth = 105
        const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
        const offsetWidth = this.$el.offsetWidth // container width
        const maxLeft = offsetWidth - menuMinWidth // left boundary
        const left = e.clientX - offsetLeft // 15: margin right

        if (left > maxLeft) {
          this.left = maxLeft
        } else {
          this.left = left
        }

        this.top = e.clientY - 60 // fix 位置bug
        this.visible = true
    },
    closeMenu() {
      this.visible = false
    },

    // 初始化与绑定监听事件方法
    scrollInit() {
      // 获取要绑定事件的元素
      const scrollDiv = document.getElementById("tags");
      // document.addEventListener('DOMMouseScroll', handler, false)
      // 添加滚轮滚动监听事件，一般是用下面的方法，上面的是火狐的写法
      scrollDiv.addEventListener('mousewheel', handler, false)
      // 滚动事件的出来函数
      function handler(event) {
        // 获取滚动方向
        const detail = event.wheelDelta || event.detail;
        // 定义滚动方向，其实也可以在赋值的时候写
        const moveForwardStep = 1;
        const moveBackStep = -1;
        // 定义滚动距离
        let step = 0;
        // 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
        if (detail < 0) {
          step = moveForwardStep * 100;
        } else {
          step = moveBackStep * 100;
        }
        // 对需要滚动的元素进行滚动操作
        scrollDiv.scrollLeft += step;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
#tags {
  border-radius: none !important;
  position: absolute;
  padding-left: 8px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background-color: #fff;
  padding-top: 8px;
  overflow: hidden;
  white-space: nowrap;
  z-index: 999;
  .tag-item {
    width: 100%;
    height: 40px;
  }
}
.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  vertical-align: bottom;
}

.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 20px;
  }
}

.el-tag {
  cursor: pointer;
  border-radius: 0px !important;
  height: 30px !important;
  line-height: 30px !important;
  padding: 0px 20px;
  margin-right: 10px;
  margin-bottom: 8px;
}

// 右键样式
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(175, 174, 174, 0.3);
  li {
    height: 30px;
    line-height: 30px;
  }
}

.contextmenu li {
  margin: 0;
  padding: 0px 16px;
  cursor: pointer;
}

.contextmenu li:hover {
  background: #eee;
}
</style>
