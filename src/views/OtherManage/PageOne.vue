<template>
  <div class="home-index-box">
    <LineTitle :title="title"></LineTitle>
    <div class="form">
      <el-select v-model="value0" placeholder="请选择数据类型">
        <el-option
          v-for="item in options0"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择数据类型">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择数据类型">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value3" placeholder="请选择数据类型">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary">查看曲线图</el-button>
    </div>
    <!--折线趋势图-->
    <div class="chart-container">
      <LineCharst height="100%" width="100%"></LineCharst>
    </div>
  </div>
</template>

<script>
import LineTitle from '@/components/LineTitle.vue'
import LineCharst from "../../components/LineECharst.vue";
export default {
  data() {
    return {
      title: '历史曲线图',
      options0: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      options3: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value0: "",
      value1: "",
      value2: "",
      value3: ""
    };
  },
  components: {
    LineCharst,
    LineTitle
  }
};
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: auto;
  height: calc(100vh - 280px);
}
</style>