import React, { Component, createRef } from 'react'
import { Button } from 'antd'
import http from 'axios'
import { store, increment, decrement } from '../../redux'

class HttpDemo extends Component {
  state = {
    students: [],
    count: 0,
    sum: 0,
  }
  sendHttp = () => {
    http.get('http://localhost:3000/api/students').then(res => {
      this.setState({ students: res.data })
    })
  }
  add = () => {
    store.dispatch(increment(1))
  }
  mins = () => {
    store.dispatch(decrement(1, 500))
  }
  addOne = () => {
    this.setState({ count: 1 + this.state.count })
    console.log(this.state.count)
  }
  plus1 = () => {
    this.setState(
      state => ({ sum: state.sum + 1 }),
      () => {
        console.log('callback', this.state.sum)
      }
    )
    console.log(this.state.sum)
  }
  buttonRef = createRef()
  componentDidMount() {
    const { current: button } = this.buttonRef
    button.addEventListener('click', this.plus1)
    this.timer = setInterval(() => {
      if (this.state.sum < 3) {
        this.plus1()
      } else {
        clearInterval(this.timer)
      }
    }, 1000)
  }
  render() {
    const { students, count, sum } = this.state
    return (
      <div>
        <Button type='primary' onClick={this.sendHttp}>
          发送http
        </Button>
        <ul>
          {students.map(student => {
            return <li key={student.id}>{student.name}</li>
          })}
        </ul>
        <hr />
        <Button onClick={this.add} type='info'>
          加一
        </Button>
        <Button onClick={this.mins} type='info'>
          减一
        </Button>
        <p>{store.getState()}</p>
        <hr />
        <h2>状态更新是同步还是异步？</h2>
        <button onClick={this.addOne}>加1</button>
        <p>count:{count}</p>
        <button ref={this.buttonRef}>自定义绑定事件，加1</button>
        <p>同步更新，sum:{sum}</p>
      </div>
    )
  }
}

export default HttpDemo
