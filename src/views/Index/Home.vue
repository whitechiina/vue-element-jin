<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in data" :key="index">
          <div class="main">
            <div class="image">
              <img :src="item.img">
            </div>
            <div class="content">
              <div class="title"><h5>{{item.title}}</h5></div>
              <div class="txt">{{item.text}}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 折线图 -->
    <div class="echarst-wrap">
      <line-echarst height="400px"></line-echarst>
    </div>

    <!-- pie和柱状图 -->
    <div class="bottom">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="echarst-wrap">
            <pie-echarst />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="echarst-wrap">
            <bar-echarst />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LineEcharst from "./components/LineEcharst.vue"
import PieEcharst from "./components/PieEcharst.vue"
import BarEcharst from "./components/BarEcharst.vue"
export default {
  components: {
    LineEcharst,
    PieEcharst,
    BarEcharst
  },
  data() {
    return {
      data: [{
        img: 'https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg',
        title: '标题1',
        text: '这是内推展示'
      },{
        img: 'https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg',
        title: '标题2',
        text: '这是内推展示'
      },{
        img: 'https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg',
        title: '标题3',
        text: '这是内推展示'
      },{
        img: 'https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg',
        title: '标题4',
        text: '这是内推展示'
      }]
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/handle.scss";
  .header {
    margin-bottom: 20px;
    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #d8dce5;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .1);
      padding: 10px;
      background-color: #fff;
      .image {
        width: 80px;
        height: 80px;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .content {
        padding-left: 20px;
        .title {
          font-size: 26px;
          color: rgba(0,0,0,.45);
          h5 {
            margin: 0 auto;
            @include font_color("font_color1");
          }
        }
        .txt {
          font-size: 10px;
        }
      }
    }
  }

  .echarst-wrap {
    border: 1px solid #d8dce5;
    padding: 10px;
    background-color: white;
  }

  .bottom {
    margin-top: 20px;
  }
</style>