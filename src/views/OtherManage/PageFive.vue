<template>
    <div class="main">
        <LineTitle :title="title"></LineTitle>
        <vxe-table
          border
          :cell-style="headerCellStyle"
          height="300"
          :data="tableData"
          @cell-click="headerCellClickEvent"
          v-show="show">
          <vxe-table-column field="name" title="矿名称"></vxe-table-column>
          <vxe-table-column field="id" title="矿编号"></vxe-table-column>

          <vxe-table-colgroup title="模拟量">
            <vxe-table-column field="Mnumber" title="数量"></vxe-table-column>
            <vxe-table-column field="Mwarning" title="报警"></vxe-table-column>
            <vxe-table-column field="Mpower" title="断电"></vxe-table-column>
            <vxe-table-column field="Mno" title="馈电异常"></vxe-table-column>
          </vxe-table-colgroup>

          <vxe-table-colgroup title="开关量">
            <vxe-table-column field="Snumber" title="数量"></vxe-table-column>
            <vxe-table-column field="Swarning" title="报警"></vxe-table-column>
            <vxe-table-column field="Spower" title="断电"></vxe-table-column>
            <vxe-table-column field="Sno" title="馈电异常"></vxe-table-column>
          </vxe-table-colgroup>

          <vxe-table-column field="leave" title="是否掉线"></vxe-table-column>
        </vxe-table>

    </div>
</template>

<script>
import LineTitle from '@/components/LineTitle.vue'
export default {
    data() {
        return {
            show: true,
            title: '综合表格监控',
            tableData: [
                { name: '澄合二矿', id: 'chengheerkuang', Mnumber: 26, Mwarning: 0, Mpower: 0, Mno: 0,  Snumber: 22, Swarning: 0, Spower: 0, Sno: 0, leave: "设备已离线"},
                { name: '安里煤矿', id: 'anlimeikuang', Mnumber: 23, Mwarning: 0, Mpower: 0, Mno: 0,  Snumber: 18, Swarning: 0, Spower: 0, Sno: 0, leave: "设备已离线"},
                { name: '澄合二矿', id: 'shijiapomeiye', Mnumber: 4, Mwarning: 0, Mpower: 0, Mno: 0,  Snumber: 0, Swarning: 0, Spower: 0, Sno: 0, leave: "设备已离线"},
            ]
        }
    },
    methods: {
        // 点击事件
        headerCellClickEvent ({ column }) {
            this.show = false
            this.title +=  '>>>' + '测试'
            console.log(column)
        },

        // 筛选样式
        headerCellStyle ({ row, column }) {
            if (column.property === 'Mnumber') {
                if (row.Mnumber <= 20 ) {
                    return {
                        color: "green",
                        cursor: "pointer"
                    }
                } else {
                    return {
                        color: "red",
                        cursor: "pointer"
                    }
                }
            }
            if (column.property === 'Snumber') {
                if (row.Snumber <= 20 ) {
                    return {
                        color: "green",
                        cursor: "pointer"
                    }
                } else {
                    return {
                        color: "red",
                        cursor: "pointer"
                    }
                }
            }
        }
    },
    components: {
        LineTitle
    }
}
</script>

<style lang="scss" scoped>
    .main /deep/ {
        th {
        .vxe-cell {
                text-align: center !important;
            }
        }
    }
</style>