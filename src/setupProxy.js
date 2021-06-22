/*
 * @Description: 代理配置
 * @Date: 2021-06-22 11:44:02 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-22 15:19:03 +0800
 * @LastEditors: JackChou
 */
const { createProxyMiddleware } = require('http-proxy-middleware')
const proxy = createProxyMiddleware
module.exports = function (app) {
  const dev1 = proxy('/api', {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
  const dev2 = proxy('/api2', {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
  app.use(dev1, dev2)
}
