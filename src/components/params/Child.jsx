import React, { Component } from 'react'
class Child extends Component {
  constructor(props) {
    super(props)
    console.log('child constructor')
    this.state = {}
  }
  //TODO 组件状态完全依赖于 props
  //NOTE 推荐使用，容易出bug
  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    console.log('child getDerivedStateFromProps')
    return {}
  }

  // componentDidMount() {
  //   console.log('child componentDidMount')
  // }

  // shouldComponentUpdate() {
  //   console.log('child shouldComponentUpdate')
  //   return true
  // }

  render() {
    console.log('child render')
    return <div>来自父组件：{this.props.count}</div>
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('child getSnapshotBeforeUpdate')
  //   console.log(prevProps, prevState)
  //   return '子组件'
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('child componentDidUpdate')
  //   console.log(prevProps, prevState, snapshot)
  // }

  // componentWillUnmount() {
  //   console.log('child componentWillUnmount')
  // }
}

export default Child
