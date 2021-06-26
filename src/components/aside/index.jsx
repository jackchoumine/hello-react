import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom'
class Aside extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <HashRouter>
        <div>
          <aside>
            <Link to='/'>基本配置</Link>
            <br />
            <Link to='/pass-params'>路由传参</Link>
            <br />
            <Link to='/http'>http请求封装</Link>
            <br />
            <Link to='/myForm'>受控组件</Link>
            <br />
            <Link to='/modal'>modal</Link>
          </aside>
        </div>
      </HashRouter>
    )
  }
}

export default Aside
