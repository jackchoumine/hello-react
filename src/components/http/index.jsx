import React, { Component } from 'react'
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
        <button onClick={this.sendHttp}>发送http</button>
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
