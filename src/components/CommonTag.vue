<template>
  <div class="tags">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @click="changeMenu(tag)"
      @close="handleClose(tag)"
      :effect="$route.name === tag.name? 'dark': 'plain'"
    >{{tag.label}}</el-tag>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    }
  },
  computed: {
    ...mapState({
        tags: state => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations({
        close: 'closeTab'
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({name: item.name})
      this.$store.commit('selectMenu', item)
    }
  }
};
</script>


<style lang="scss" scoped>
.tags {
  border-radius: none !important;
  margin-bottom: 20px;
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
}

.el-tag--plain .el-tag__close:hover {
  background-color: red !important;
}

</style>
