const name = 'Vue-Element-Jin后台管理系统' // page title

module.exports = {
    // 基本路径
    publicPath: './', //默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
    // 输出文件目录
    outputDir: 'dist',  //打包的时候生成的一个文件名
    assetsDir: 'static',
    indexPath: 'index.html',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = name
            return args
        })
    },
    // webpack-dev-server 相关配置
    devServer: { 
        open: false, //open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
        host: 'localhost', //默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后之后可以访问ip地址
        port: 8888,
        // 代理
        proxy: {
            '/api': {
                target: 'http://113.142.69.131:12580/api', //目标接口域名
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //重写接口
                }
            }
        }, // 设置代理
        before: app => {}
    },
};
