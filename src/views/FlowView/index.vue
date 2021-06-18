<template>
  <!-- logicFlow框架 -->
  <div class="logic-flow">

    <!-- 左侧工具栏 -->
    <div class="node-panel">
      <div class="node-item" v-for="item in nodeList" :key="item.text" @mousedown="handleDragNode(item)">
        <div class="node-item-icon" :class="item.class">
          <span class="node-label">{{item.text}}</span>
        </div>
      </div>
    </div>

    <!-- 工具按钮 -->
    <el-button-group class="btnRadio">
      <el-button type="primary" @click="handleBtn('large')">放大</el-button>
      <el-button type="primary" @click="handleBtn('small')">缩小</el-button>
      <el-button type="primary" @click="handleBtn('reset')">大小适应</el-button>
      <el-button type="primary" @click="handleBtn('resetTranslate')">定位还原</el-button>
      <el-button type="primary" :disabled="!undoState" @click="handleBtn('undo')">上一步(ctrl+z)</el-button>
      <el-button type="primary" :disabled="!redoState" @click="handleBtn('redo')">下一步(ctrl+y)</el-button>
      <el-button type="primary" @click="handleBtn('img')">保存为图片</el-button>
      <el-button type="primary" @click="handleBtn('data')">保存为数据</el-button>
    </el-button-group>
                            
    <!-- 画布盒子 -->
    <div id="container"></div>

    <!-- 数据展示 -->
    <el-dialog title="数据预览"
      :visible.sync="dialogVisible"
      width="60%">
      <json-viewer
      :value="treedata"
      :expand-depth=5
      copyable
      boxed
      sort></json-viewer>
    </el-dialog>
  </div>
</template>

<script>
  import JsonViewer from 'vue-json-viewer';
  import LogicFlow from '@logicflow/core'
  import { Menu, Snapshot } from '@logicflow/extension'
  import '@logicflow/core/dist/style/index.css'
  import '@logicflow/extension/lib/style/index.css'
  import { NODE_LIST, config } from '../../plugin/logicConfig' // 引入左侧工具栏配置
  import { registerWangGuan, registerJiedian } from '../../plugin/FlowNode/index' // 自定义节点样式
  export default {
    data() {
      return {
        lf: null,
        nodeList: NODE_LIST,
        visible: false,
        dialogVisible: false,
        undoState: false,
        redoState: false,
        clickNode: null,
        nodeForm: {
          text: ''
        },
        treedata: []
      }
    },
    mounted () {
      this.createCanvas();
    },
    methods: {
      // 创建logicFlow实例
      createCanvas() {
        // 2个拓展包
        LogicFlow.use(Menu)
        LogicFlow.use(Snapshot)
        this.lf = new LogicFlow({...config, container: document.querySelector('#container'), keyboard: { enabled: true } });

        // 设置折线样式
        this.lf.setTheme(
          {
            polyline: {
              stroke: '#000',
              strokeWidth: 1,
              strokeDashArray: '1,0',
              hoverStroke: '#000',
              selectedStroke: '#000',
              selectedShadow: true,
              offset: 30,
              outlineColor: '#fff',
              outlineStrokeDashArray: '3,3',
            },
          }
        )

        this.registerNode();
      },

      // 自定义工具栏
      registerNode() {
        registerWangGuan(this.lf);
        registerJiedian(this.lf);
        this.handleRender()
      },

      // 渲染logiFlow实例
      handleRender() {
        this.lf.render();
        this.LfEvent();
      },

      // 绘制区域节点事件
      LfEvent() {
        // 节点点击打开右侧属性配置栏
        this.lf.on('node:click', ({data}) => {
          // 储存选择的节点dom
          this.clickNode  = data;
          this.nodeForm   = { text: '' }
          this.visible    = true;
        })

        // 上一步、下一步按钮状态
        this.lf.on('history:change', ({ data: { undoAble, redoAble } }) => {
          this.undoState = undoAble;
          this.redoState = redoAble;
        })
      },

      // 工具栏拖拽
      handleDragNode(item) {
        this.lf.dnd.startDrag({
          type: item.type,
          properties: {
            name: item.class
          }
        })
      },

      // 右侧边栏关闭
      onClose() {
        this.visible = false;
        let obj = Object.assign(this.clickNode.properties, this.nodeForm)
        // 修改节点名字
        if(this.nodeForm.text) this.lf.updateText(this.clickNode.id, this.nodeForm.text);
        // 保存节点自定义属性
        this.lf.setProperties(this.clickNode.id, obj)
      },

      // 控制按钮
      handleBtn(btn) {
        switch (btn) {
          case 'large': {
            this.lf.zoom(true)
            break
          }
          case 'small': {
            this.lf.zoom(false)
            break
          }
          case 'reset': {
            this.lf.resetZoom()
            break
          }
          case 'resetTranslate': {
            this.lf.resetTranslate()
            break
          }
          case 'undo': {
            this.lf.undo()
            break
          }
          case 'redo': {
            this.lf.redo()
            break
          }
          case 'img': {
            this.lf.getSnapshot()
            break
          }
          case 'data': {
            let data = this.lf.getGraphData()
            this.treedata = data
            this.dialogVisible = true
            break
          }
        }
      }
    },
    components: {
      JsonViewer
    }
  }
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-x;
    touch-action: pan-y;
  }
  
  .logic-flow {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    // 工具栏样式配置
    .node-panel {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 70px;
      padding: 20px 10px 0;
      background-color: white;
      box-shadow: 0 0 10px 1px rgb(228, 224, 219);
      border-radius: 6px;
      text-align: center;
      z-index: 101;
      .node-item {
        margin-bottom: 35px;
      }
      .node-item-icon {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        background-size: cover;
        cursor: pointer;
      }
      .node-label {
        position: absolute;
        font-size: 12px;
        margin-left: -12px;
        margin-top: 30px;
        user-select: none;
      }


      // 工具栏图标
      .node-jiedian{
        background: url('../../assets/svg/jiedian.svg') no-repeat;
        background-size: cover;
      }
      .node-rect{
        border: 2px solid #0099de;
        border-radius: 5px;
      }
      .node-famen{
        background: url('../../assets/svg/wangguan.svg') no-repeat;
        background-size: cover;
      }
    }
    
    // 工具按钮 
    .btnRadio {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      z-index: 200;
    }

    #container {
      width: 100%;
      height: 100%;
    }
  }
</style>