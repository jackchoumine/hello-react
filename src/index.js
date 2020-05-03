/*
 * @Description: 应用入口
 * @Date: 2020-04-19 15:27:52
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-03 22:45:57
 * @LastEditors: JackChouMine
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Books } from './components'
import { LoginForm } from './components'

//使用 ReactDOM.render 函数必须先导出 react-dom，
//该库完成代表组件的 虚拟DOM 转为浏览器能识别 DOM节点。
ReactDOM.render(
  <React.StrictMode>
    <h2>非受控表单</h2>
    <LoginForm />
    <Books />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
