const path = require("path")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"))
    config.plugins.delete('prefetch')
    config.module.rule('scss').oneOfs.store.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/global.scss',
        })
        .end()
    })
  },
  productionSourceMap: false,

  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.2.12:8720",
        pathRewrite: { "^/api": "/api" },
        changeOrigin: true
      },
    }
  }
}
