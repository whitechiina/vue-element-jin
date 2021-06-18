<template>
    <div class="wrap">
        <h4>自定义项目title名</h4>
        <div class="flex">
            <el-input v-model="input" placeholder="请输入项目名称"></el-input>
            <el-button type=primary @click="sureSave">确定</el-button>
        </div>
    </div>
</template>

<script>
import { getCookie, setCookie,  clearCookie} from '@/utils'
export default {
    data () {
        return {
            input: ''
        }
    },
    mounted() {
        this.input = getCookie('Title')
    },
    methods: {
        sureSave() {
            clearCookie("Title")
            setCookie("Title", this.input)
            this.$store.commit('editTitlr', this.input)
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrap {
        padding: 0px 20px;
        h4 {
            padding-bottom: 20px;
        }
        .flex {
            display: flex;
            align-items: center;
        }
    }
</style>