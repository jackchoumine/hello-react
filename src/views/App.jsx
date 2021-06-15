/*
 * @Description: app 组件
 * @Date: 2020-04-19 15:27:52
 * @Author: JackChouMine
 * @LastEditTime: 2021-06-15 23:55:30 +0800
 * @LastEditors: JackChou
 */
import React, { Component } from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home.jsx'
import PassParams from './PassParams.jsx'
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
          <HashRouter>
            <Switch>
              {/* 精确匹配的放在前面 */}
              <Route exact path='/pass-params' component={PassParams} />
              <Route exact path='/query' component={PassParams} />
              <Route exact path='/dynamic/*' component={PassParams} />
              {/* 模糊匹配 */}
              <Route path='/*' component={Home} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default App
