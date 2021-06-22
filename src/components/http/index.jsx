import React, { Component } from 'react'
import { Button } from 'antd'
import http from 'axios'
import { store, increment, decrement } from '../../redux'
class HttpDemo extends Component {
  state = {
    students: [],
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
  render() {
    const { students } = this.state
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
      </div>
    )
  }
}

export default HttpDemo
