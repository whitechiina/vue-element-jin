<template>
    <div class="wrap">
        <div class="title">
            <h4>主题换肤</h4>
        </div>
        <div class="theme-item" 
        v-for="(item, index) in themes" 
        :key="index" 
        :style="{ backgroundColor: item.color }"
        @click="checktheme(item.color)"
        ></div>
    </div>
</template>

<script>
import { setCookie, clearCookie } from '@/utils/index'
import { mapState } from 'vuex'
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
    // created() {
    //     const THEME = getCookie('THEME')
    //     if (!THEME) {
    //         // 没有存储默认选色
    //         window.document.documentElement.setAttribute( "data-theme", 'blue' );
    //     } else {
    //         window.document.documentElement.setAttribute( "data-theme", THEME );
    //     }
    // },
    created() {
        if(!this.theme) {
            window.document.documentElement.setAttribute( "data-theme", 'blue' )
        } else {
            window.document.documentElement.setAttribute( "data-theme", this.theme )
        }
    },
    computed: {
        ...mapState({
            theme: state => state.color.theme
        })
    },
    methods: {
        checktheme(type) {
            clearCookie('THEME')
            setCookie('THEME', type)
            this.$store.commit('upDateTheme', type);
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