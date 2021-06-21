<template>
    <div class="wrap">
        <div class="title">
            <h4>主题换肤</h4>
        </div>
        <div class="theme-item" 
        v-for="(item, index) in themes" 
        :key="index" 
        :style="{ backgroundColor: item.color }"
        @click="theme(item.color)"
        ></div>
    </div>
</template>

<script>
import { setCookie, getCookie, clearCookie } from '@/utils/index'
export default {
    data () {
        return {
            themes: [
                {
                    color: 'red'
                },
                {
                    color: 'green'
                },
                {
                    color: 'orange'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'purple'
                },
            ]
        }
    },
    created() {
        const THEME = getCookie('THEME')
        window.document.documentElement.setAttribute( "data-theme", THEME );
    },
    methods: {
        theme(type) {
            clearCookie('THEME')
            setCookie('THEME', type)
            this.$store.commit('upDateTheme', {themeType: type});
            window.document.documentElement.setAttribute( "data-theme", type );
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrap {
        padding: 0px 20px;
        .theme-item {
            margin-top: 6px;
            display: inline-block;
            width: 24px;
            height: 24px;
            border-radius:6px;
            margin-right: 8px;
        }
    }
</style>