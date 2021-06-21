// 标题线组件
<template>
    <div class="header">
        <i></i>
        <h1 @click="back">{{title}}</h1><h1 v-if="subtitle">>>>   {{subtitle}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        }
    },
    methods: {
        back() {
            this.$emit('back')
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/handle.scss";
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
            @include bg_color("background_color1");
        }
        h1 {
            font-size: 16px;
            font-weight: 400;
            padding-left: 20px;
            left: -20px;
            margin: 0px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
</style>