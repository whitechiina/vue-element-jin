// 分页器组件
<template>
    <div>
        <vxe-pager
        align="left"
        :current-page.sync="page.currentPage"
        :page-size.sync="page.pageSize"
        :total="page.totalResult"
        @page-change="handlePageChange"
        ></vxe-pager>
    </div>
</template>

<script>
export default {
    props: {
        /*
        * page.pageSize  每页几条
        * page.currentPage  当前页数
        * page.totalResult  总条数
        */
        page: [Object]
    },
    data: () => {
        return {

        };
    },
    methods: {
        handlePageChange (val) {
            this.$emit('getData',val)
        }
    },
}
</script>