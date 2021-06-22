/*
 * @Description: 代理配置
 * @Date: 2021-06-22 11:44:02 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-22 14:53:57 +0800
 * @LastEditors: JackChou
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      // changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  )
}
