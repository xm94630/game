module.exports={
    publicPath: './',
    outputDir: 'dist',  
    assetsDir: 'static',
    runtimeCompiler:true,
    configureWebpack: {
        // devServer: {
        //     proxy: {
        //         '/epimetheus': {
        //             target: 'http://localhost:3000',
        //             //pathRewrite: {'^/epimetheus' : ''}, 
        //             secure: false, 
        //         },
        //     }
        // },
        resolve: {
            //路径别名，方便引用
            alias: {
              '@': __dirname
            }
        },
    },
    // chainWebpack: config => {
    //     config
    //       .plugin('webpack-bundle-analyzer')
    //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // }
}