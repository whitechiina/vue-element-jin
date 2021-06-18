<template>
    <div class="wrap">
        <div class="title">
            <h4>侧栏收缩</h4>
        </div>
        <div class="flex">
            <el-switch
                v-model="flag"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="isCollage">
            </el-switch>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        isCollage() {
            this.$store.commit('collapseMenu')
        }
    },
    computed: {
        flag: {
            get() {
                return this.$store.state.tab.isCollapse
            },
            set() {
                return this.$store.state.tab.isCollapse
            }
        }
    }
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