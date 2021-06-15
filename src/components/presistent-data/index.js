/*
 * @Description: 高阶组件
 * @Date: 2020-05-05 23:42:25
 * @Author: JackChouMine
 * @LastEditTime: 2021-06-15 23:57:42 +0800
 * @LastEditors: JackChou
 */
import React, { Component } from 'react'
function withPersistentData(WrappedComponent) {
  return class extends Component {
    // componentWillMount() {
    //   const name = localStorage.getItem('name')
    //   this.setState({ name })
    // }
    render() {
      return <WrappedComponent name={this.state?.name ?? ''}></WrappedComponent>
    }
  }
}

export default withPersistentData
