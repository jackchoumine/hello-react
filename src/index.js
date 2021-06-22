/*
 * @Description: 应用入口
 * @Date: 2020-04-19 15:27:52
 * @Author: JackChouMine
 * @LastEditTime: 2021-06-23 02:31:45 +0800
 * @LastEditors: JackChou
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// TODO 如何省略扩展名？
import App from './views/App.jsx'
import * as serviceWorker from './serviceWorker'
import { store } from './redux'
//使用 ReactDOM.render 函数必须先导出 react-dom，
//该库完成代表组件的 虚拟DOM 转为浏览器能识别 DOM节点。
ReactDOM.render(<App />, document.getElementById('root'))
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
