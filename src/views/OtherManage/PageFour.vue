<template>
    <div>
       <LineTitle :title="title"></LineTitle>
        <div class="form">
            <vxe-toolbar ref="xToolbar1" custom>
            <template #buttons>
                <div class="header" style="display: flex; justify-content: space-between">
                    <div class="search">
                        <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="export">
                        <el-button type="primary" @click="exportDataEvent">导出</el-button>
                        <el-button type="primary" @click="print">打印</el-button>
                    </div>
                </div>
            </template>
            </vxe-toolbar>
        </div>

        <vxe-table
          border
          resizable
          ref="xTable1"
          id="toolbar_demo5"
          height="400"
          :export-config="{}"
          :custom-config="{storage: true, checkMethod: checkColumnMethod}"
          :data="tableData"
          @resizable-change="resizableChangeEvent">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table> 

        <vxe-pager
        align="left"
        :current-page.sync="page1.currentPage"
        :page-size.sync="page1.pageSize"
        :total="page1.totalResult"
        ></vxe-pager>
    </div>
</template>

<script>
import LineTitle from '@/components/LineTitle.vue'
export default {
    data () {
        return {
            title: '报表筛选',
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value: '',
            tableData: [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'vxe-table 从入门到放弃' },
            { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
            { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'vxe-table 从入门到放弃' },
            { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'vxe-table 从入门到放弃' },
            { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'vxe-table 从入门到放弃' }
            ],
            page1: {
                currentPage: 1,
                pageSize: 10,
                totalResult: 200
            },
        }
    },
    created () {
        this.$nextTick(() => {
            // 手动将表格和工具栏进行关联
            this.$refs.xTable1.connect(this.$refs.xToolbar1)
        })
    },
    methods: {
        // 导出
        exportDataEvent() {
            this.$refs.xTable1.openExport({ types: ["xlsx"] });
        },
        // 打印pdf
        print() {
            this.$refs.xTable1.print({
                sheetName: "打印表格",
                style: printStyle,
                columns: [
                { type: "seq" },
                { field: "name" },
                { field: "role" },
                { field: "address" }
                ],
                beforePrintMethod: ({ content }) => {
                // 拦截打印之前，返回自定义的 html 内容
                return topHtml + content + bottomHtml;
                }
            });
        },
        checkColumnMethod ({ column }) {
            if (column.property === 'role') {
            return true
            }
            return true
        },
        resizableChangeEvent () {
            const columns = this.$refs.xTable1.getColumns()
            const customData = columns.map(column => {
            return {
                width: column.renderWidth
            }
            })
            console.log(customData)
        }
    },
    components: {
        LineTitle
    }
}

// 打印样式
const printStyle = `
.title {
    text-align: center;
}
.my-list-row {
    display: inline-block;
    width: 100%;
}
.my-list-col {
    float: left;
    width: 33.33%;
    height: 28px;
    line-height: 28px;
}
.my-top,
.my-bottom {
    font-size: 12px;
}
.my-top {
    margin-bottom: 5px;
}
.my-bottom {
    margin-top: 30px;
    text-align: right;
}
`;
// 打印顶部内容模板
const topHtml = `
<h1 class="title">监控设备故障记录报表</h1>
<div class="my-top">
    <div class="my-list-row">
    <div class="my-list-col">起止时间:</div>
    <div class="my-list-col">煤矿:</div>
</div>
`;
// 打印底部内容模板
const bottomHtml = `
<div class="my-bottom">
    <div class="my-list-row">
    <div class="my-list-col"></div>
    <div class="my-list-col"></div>
    <div class="my-list-col">报表日期:</div>
    </div>
</div>
`;
</script>

<style lang="scss" scoped>
</style>