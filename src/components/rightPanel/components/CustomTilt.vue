<template>
    <div class="wrap">
        <h4>自定义项目title名</h4>
        <div class="flex">
            <el-input v-model="input" placeholder="请输入项目名称"></el-input>
            <el-button type=primary>确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            input: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrap {
        padding: 0px 20px;
        .flex {
            display: flex;
            align-items: center;
        }
    }
</style>