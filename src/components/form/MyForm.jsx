import React, { Component } from 'react'
class MyForm extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2>受控组件</h2>
        <form>
          <label htmlFor='name'>
            用户名：
            <input type='text' id='name' name='myName' onChange={this.onChange('myName')} />
          </label>
          <label htmlFor='password'>
            年纪：
            <input type='number' id='password' name='age' onChange={this.onChange('age')} />
          </label>
        </form>
      </div>
    )
  }
  onChange = key => event => this.setState({ [key]: event.target.value })
  // 如果不使用高阶函数 每个表单项都要写一个事件处理函数，难以阅读和难以维护
}

export default MyForm
