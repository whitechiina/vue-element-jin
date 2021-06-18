<template>
    <div class="panel-shade">
        <!-- 遮罩 -->
        <div class="shade" v-show="show" :class="show? 'shade':''"></div>
        <!-- 面板 -->
        <div class="panel-setting" :class="show ? 'havewidth':'nowidth'">
            <div class="btn-flex" @click="showClick">
                <i v-show="show" class="iconfont icon-guanbi"></i>
                <i v-show="!show" class="iconfont icon-shezhi"></i>
            </div>
            <div class="custom-setting-item" v-show="show">
                <div class="division"><CustomTitle></CustomTitle></div>
                <div class="division"><CustomColor></CustomColor></div>
                <div class="division"><CustomAside></CustomAside></div>
                <div class="division"><CustomTag></CustomTag></div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomTitle from './components/CustomTilt.vue'
import CustomColor from './components/CustomColor.vue'
import CustomAside from './components/CustomAside.vue'
import CustomTag from './components/CustomTag.vue'
export default {
    data () {
        return {
            show: false
        }
    },
    methods: {
        showClick () {
            this.show = !this.show
        }
    },
    components: {
        CustomTitle,
        CustomColor,
        CustomAside,
        CustomTag
    }
}
</script>


<style>
    .shade {
        background-color: rgba(0,0,0,.2);
        backdrop-filter: blur(5px);
    }
</style>
<style lang="scss" scoped>
        .panel-shade {
            position: relative;
            top: 0;
            left: 0;
            z-index: 999;
            .shade {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
            }
            .havewidth {
                width: 100%;
                max-width: 280px;
                transition: all .25s;
            }
            .nowidth {
                width: 0;
                max-width: 0px;
                transition: all .25s;
            }
            .panel-setting {
                position: fixed;
                top: 0;
                right: 0;
                height: 100vh;
                background-color: #fff;
                box-sizing: border-box;
                .btn-flex {
                    position: absolute;
                    top: 40%;
                    left: -50px;
                    width: 50px;
                    height: 50px;
                    background-color: #0066cc;
                    cursor: pointer;
                    border-radius: 20% 0% 0% 20%;
                    display: flex;
                    align-items: center;
                    justify-content: center;/*水平居中*/
                    .icon-shezhi {
                        font-size: 26px;
                        color: #fff;
                    }
                    .icon-guanbi {
                        font-size: 26px;
                        color: #fff;
                    }
                }
                .custom-setting-item {
                    color: rgba(0, 0, 0, .65);
                    font-size: 16px;
                    padding: 12px 0;
                    .division {
                        padding: 10px 0px;
                    }
                }
            }
        }
</style>