/*
 * @Description: app 组件
 * @Date: 2020-04-19 15:27:52
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 16:49:09
 * @LastEditors: JackChouMine
 */
import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const todos = ['up', 'eat', 'school']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>hello react</h1>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
