<template>
  <div class="tags" v-if="!tagflag">
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
      {{tag.label}}
    </span>
    <!-- 右键菜单 -->
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
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
  computed: {
    ...mapState({
        tags: state => state.tab.tabList,
        tagflag: state => state.tab.tagFlag
    })
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    },
    tags() {
      // this.$router.push('/home')
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
    }
  }
};
</script>


<style lang="scss" scoped>
.tags {
  border-radius: none !important;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 8px;
  padding-left: 8px;
  border-bottom: 1px solid #d8dce5;
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
  height: 40px !important;
  line-height: 40px !important;
  padding: 0px 20px;
  margin-right: 10px;
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
