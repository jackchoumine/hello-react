/*
 * @Description: antd 按需导入配置
 * @Date: 2021-06-22 18:14:29 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-22 18:36:11 +0800
 * @LastEditors: JackChou
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': 'green' },
    },
  })
)
