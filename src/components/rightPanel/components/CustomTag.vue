<template>
    <div class="wrap">
        <div class="title">
            <h4>标签选项</h4>
        </div>
        <div class="flex">
            <el-switch
                v-model="tagflag"
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
            this.$store.commit('tagFlag')
        }
    },
    computed: {
        tagflag: {
            get () {
                return this.$store.state.tab.tagFlag
            },
            set(){
                return this.$store.state.tab.tagFlag
            }
        },
        
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