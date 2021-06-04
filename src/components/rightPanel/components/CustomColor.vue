<template>
    <div class="wrap">
        <div class="title">
            <h4>主题色</h4>
        </div>
        <div class="flex">
            <el-color-picker v-model="color1" @change="themeChange"></el-color-picker>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            color1: '#0066CC',
        }
    },
    methods: {
        themeChange() {
            this.$store.commit('setColor',this.color1)
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrap {
        padding: 0px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .flex {
            display: flex;
            align-items: center;
        }
    }
</style>