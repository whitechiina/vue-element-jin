<template>
    <div>
        <LineTitle :title="title"></LineTitle>
    </div>
</template>

<script>
import LineTitle from '@/components/LineTitle.vue'
export default {
    data() {
        return {
            title: '综合表格监控'
        }
    },
    components: {
        LineTitle
    }
}
</script>

<style lang="scss" scoped>
    
</style>