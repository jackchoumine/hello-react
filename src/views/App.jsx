/*
 * @Description: app 组件
 * @Date: 2020-04-19 15:27:52
 * @Author: JackChouMine
 * @LastEditTime: 2021-06-15 22:34:17 +0800
 * @LastEditors: JackChou
 */
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home.jsx'
// TODO 路径如何简写？
import Aside from '../components/aside/index.jsx'
const leftStyle = { width: '200px', height: '100vh', backgroundColor: '#e8e8e8' }
const rightStyle = { width: 'calc(100vw - 200px)' }
const containerStyle = {
  display: 'flex',
}
class App extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={leftStyle}>
          <Aside />
        </div>
        <div style={rightStyle}>
          {/* 改成 HashRouter 就不行了 */}
          <BrowserRouter>
            <Route exact path='/' component={Home} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App
