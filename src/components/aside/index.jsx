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
          </aside>
        </div>
      </HashRouter>
    )
  }
}

export default Aside
