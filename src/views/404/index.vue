<template>
  <div class="page-wrap">
      <div class="page404">
        <div class="content">
            <div class="i404">
                <img src="../../assets/images/404.png"/>
            </div>
            <div class="sign">
                <p>您的访问页面可能被删除或者不存在</p>
                <p class="small">请检查您输入的网址是否正确，或单击下面的按钮返回主页。</p>
                <a href="/">返回首页</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page404",
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .page-wrap{
    width: 100%;
    height: 100vh;
    .page404 {
        width: 1200px;
        margin: 0 auto;
        .content {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .i404 {
            img {
                width: 800px;
                height: auto;
            }
        }
        .sign {
            p {
                font-size: 24px;
            }
            .small {
                font-size: 18px;
                color: gray;
                margin-bottom: 60px;
            }
            a {
                display: inline-block;
                width: 160px;
                height: 40px;
                background-color: #0066cc;
                border-radius: 30px;
                line-height: 40px;
                color: #fff;
                text-decoration: none;
                text-align: center;
                font-size: 20px;
            }
        }
    }
  }

</style>
