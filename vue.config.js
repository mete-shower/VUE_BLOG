/**
 * TODO:vue-cli3.0配置文件
 * Created by Chenchen on 2020/5/6 23:55
 **/
const path = require('path');
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
        common: path.resolve(__dirname, './src/common'),
        api: path.resolve(__dirname, './src/api'),
        router: path.resolve(__dirname, './src/router'),
        views: path.resolve(__dirname, './src/views'),
        data: path.resolve(__dirname, './src/data'),
        public: path.resolve(__dirname, 'public')
      }
    }
  },
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {},
    requireModuleExtension: false
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hot: true,
    hotOnly: false,
    proxy: null,
    overlay: {
      warnings: true,
      errors: true
    },
    before: app => {
    }
  },
  pluginOptions: {}
};

// 全局导入样式
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/common/stylus/index.styl')
      ]
    })
}
