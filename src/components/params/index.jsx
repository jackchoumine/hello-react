import React, { Component } from 'react'
import Child from './Child'
class Params extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params)
    this.state = { queryObj: this.parseQuery(), count: 0 }
    console.log('parent constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state)
    console.log('parent getDerivedStateFromProps')
    return state
  }

  componentDidMount() {
    console.log('parent componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('parent shouldComponentUpdate')
    return true
  }

  render() {
    console.log('parent render')
    return (
      <div>
        <p>params,age:{this.props.match.params.age}</p>
        <p>query,age:{this.state.queryObj.age}</p>
        <p>query,name:{this.state.queryObj.name}</p>
        <button onClick={this.add}>加一</button>
        <br />
        <p>{this.state.count}</p>
        <Child count={this.state.count} />
      </div>
    )
  }
  add = () => {
    this.setState({ count: this.state.count + 1 })
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('parent getSnapshotBeforeUpdate')
    console.log(prevProps, prevState)
    return '父组件'
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('parent componentDidUpdate')
    console.log(prevProps, prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('parent componentWillUnmount')
  }
  parseQuery() {
    const queryStr = this.props.location.search.slice(1).split('&')
    const queryObj = {}
    queryStr.forEach(ele => {
      const [key, value] = ele.split('=')
      queryObj[key] = value
    })
    return queryObj
  }
}

export default Params
