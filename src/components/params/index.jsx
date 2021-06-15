import React, { Component } from 'react'
class Params extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params)
    this.state = { queryObj: this.parseQuery() }
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
  render() {
    return (
      <div>
        <p>params,age:{this.props.match.params.age}</p>
        <p>query,age:{this.state.queryObj.age}</p>
        <p>query,name:{this.state.queryObj.name}</p>
      </div>
    )
  }
}

export default Params
