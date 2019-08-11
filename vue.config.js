module.exports={
    publicPath: './',
    outputDir: 'datas_build',  
    assetsDir: 'static',
    runtimeCompiler:true,
    // configureWebpack: {
    //     devServer: {
    //         proxy: {
    //             '/epimetheus': {
    //                 target: 'http://localhost:3000',
    //                 secure: false, 
    //             },
    //         }
    //     },
    //     resolve: {
    //         alias: {
    //           '@': __dirname
    //         }
    //     },
    // },

    // chainWebpack: config => {
    //     config
    //       .plugin('webpack-bundle-analyzer')
    //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // }
}