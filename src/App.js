/*
 * @Description: app 组件
 * @Date: 2020-04-19 15:27:52
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-06 00:06:02
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
import logo from './logo.svg'
import { LoginForm, ListBook, Books, WithPersistentData } from './components'
import './App.css'
const HocListBook = WithPersistentData(ListBook)
const HocLoginForm = WithPersistentData(LoginForm)
class App extends Component {
  constructor(props) {
    super(props)
    localStorage.setItem('name', 'jackchoumine')
  }
  loginFormBlur = () => {
    //调用组件的方法
    this.loginForm.blur()
  }
  showChildDOM = () => {
    console.log(this.booksDOM.nodeType)
  }
  render() {
    const todos = ['up', 'eat', 'school']
    const app = (
      <div>
        <h2>16版本的新特性</h2>
        <ul>
          <HocListBook />
        </ul>
        <div>
          <HocLoginForm />
          {/* <button onClick={this.loginFormBlur}>表单失焦</button> */}
        </div>
        <Books
          listRef={(el) => {
            this.booksDOM = el
          }}
        />
        <button onClick={this.showChildDOM}>通过 ref 获取子组件的DOM</button>
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
                <li key={todo}>{todo}</li>
              ))}
            </ul>
          </header>
        </div>
      </div>
    )
    return app
  }
}

export default App
