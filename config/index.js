dev: {
  env: require('./dev.env'),
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  cssSourceMap: false,
  proxyTable: {
    '/api': {
      target: 'http://www.abc.com',  //目标接口域名
      changeOrigin: true,  //是否跨域
      secure: false, // 允许https请求      pathRewrite: {
        '^/api': '/api'   //重写接口
      }
    }
}