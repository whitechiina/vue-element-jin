<template>
    <div>
        <el-button @click="preview" type="primary">点击跳转打开在线文件</el-button>
        <!-- 标签展示 -->
        <embed :src="previewUrl" type="application/pdf" width="100%" height="500px">

        <!-- ifarma展示 -->
        <el-button type="primary" @click="iframa">iframe弹窗打开</el-button>
        <el-dialog :title="fileName" :visible.sync="visible" width="60%" :closeOnClickModal="false">
            <div class="view_box" v-if="visible">
                <iframe :src="pdfurl" width="100%" height="900px"></iframe>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: '预览文件',
            visible: false,
            previewUrl: 'http://mongol.xjdaily.com/newspaper/2021-06-21/22/23-3748216.pdf'
        }
    },
    computed: {
        pdfurl() {
            return this.previewUrl
        }
    },
    methods: {
        preview() {
            window.open('http://mongol.xjdaily.com/newspaper/2021-06-21/22/23-3748216.pdf')
        },
        iframa() {
            this.visible = true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>