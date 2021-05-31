<template>
  <div id="Echarst-line" style="width: 100%;height: 550px;"></div>
</template>

<script>
import * as ECharts from "echarts";
// 折线图配置
let lineDefaultOpt = {
  backgroundColor: '#001848',
  tooltip: {
    trigger: "axis"
  },
  legend: {
    bottom: 0,
    left: "center"
  },
  grid: {
    left: 30,
    bottom: 50,
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#fff"
    },
    axisLine: {
      lineStyle: {
        color: "rgba(12,102,173,.5)",
        width: 2
      }
    }
  },
  yAxis: {
    type: "value",
    axisTick: {
      show: false //不显示刻度线
    },
    axisLabel: {
      color: "#fff" //y轴上的字体颜色
    },
    axisLine: {
      lineStyle: {
        width: 2,
        color: "rgba(12,102,173,.5)" //y轴的轴线的宽度和颜色
      }
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
      type: "line",
      symbol: "none",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#09b0f5"
        }
      },
      areaStyle: {
        normal: {
          color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#09b0f5"
            },
            {
              offset: 1,
              color: "rgba(12,102,173,.5)"
            }
          ])
        }
      }
    }
  ]
};
export default {
  data() {
    return {
      //折线图
      doubleLineOption: lineDefaultOpt,
      selectGatheringTime: []
    };
  },
  mounted() {
    this.getDoubleLineData(); //收款折线数据
  },
  methods: {
    eChartsInit(domId, theme, opt) {
      ECharts.init(document.getElementById(domId), theme).setOption(opt);
      window.addEventListener("resize", () => {
        ECharts.init(document.getElementById(domId), theme).resize();
      });
    },
    //获取折线数据
    getDoubleLineData() {
      lineDefaultOpt.xAxis.data = ['01','02','03','04','05','06','07','08','09','10','11','12 (月)'];
      lineDefaultOpt.series[0].data = [21,25,27,12,22,21,25,27,12,22,42,32];
      this.eChartsInit("Echarst-line", "light", this.doubleLineOption);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>