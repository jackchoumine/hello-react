import React, { Component } from 'react'
import { Button } from 'antd'
import http from 'axios'
class HttpDemo extends Component {
  state = {
    students: [],
  }
  sendHttp = () => {
    http.get('http://localhost:3000/api/students').then(res => {
      this.setState({ students: res.data })
    })
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
      </div>
    )
  }
}

export default HttpDemo
