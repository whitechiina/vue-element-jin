<template>
    <div>
       <LineTitle :title="title"></LineTitle>
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

        <vxe-table
          border
          resizable
          ref="xTable1"
          id="toolbar_demo5"
          height="400"
          :custom-config="{storage: true, checkMethod: checkColumnMethod}"
          :data="tableData"
          @resizable-change="resizableChangeEvent">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table> 
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
            ]
        }
    },
    created () {
        this.$nextTick(() => {
            // 手动将表格和工具栏进行关联
            this.$refs.xTable1.connect(this.$refs.xToolbar1)
        })
    },
    methods: {
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
</script>

<style lang="scss" scoped>
</style>