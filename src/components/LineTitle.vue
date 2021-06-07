// 标题线组件
<template>
    <div class="header">
        <i></i>
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
        background-color: #fff;
        margin: 0px 0px 20px 0px;
        display: flex;
        align-items: center;
        i {
            width: 10px;
            height: 100%;
            background-color: #0066cc;
        }
        h1 {
            font-size: 16px;
            font-weight: 400;
            padding-left: 20px;
            left: -20px;
            margin: 0px;
        }
    }
</style>