<template>
  <div id="mse"></div>
</template>

<script>
import Player from 'xgplayer';
export default {
    data() {
        return {
            Player: null
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        // 设置视频配置(注意：initPlayer应放在异步函数里或mounted之后，不可在created里直接加载，否则不生效)
        initPlayer(url){
            this.Player = new Player({
                // el、url为必选配置，其它为可选配置
                el: document.querySelector('#mse'),
                poster: "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
                url: url,
                volume: 0.6,    // 初始音量
                autoplay: false,  // 自动播放
                playbackRate: [0.5, 0.75, 1, 1.5, 2],   // 当前播放速度
                defaultPlaybackRate: 1,     // 播放速度设置为1
                playsinline: true,
            });
        },
        getData() {
            this.initPlayer('https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4')
        }
    }
};
</script>

<style lang="scss" scoped>
    #mse {
        flex: auto;
    }
</style>
