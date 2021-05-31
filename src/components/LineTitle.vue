// 标题线组件
<template>
    <div class="header">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 52px;
        line-height: 52px;
        background-color: #F2F2F2;
        h1 {
            font-size: 16px;
            font-weight: 400;
            padding-left: 20px;
            left: -20px;
            margin: 0px;
        }
    }
</style>