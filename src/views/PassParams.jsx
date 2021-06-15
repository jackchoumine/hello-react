import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { Params } from '../components'
class PassParams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 25,
    }
  }
  render() {
    return (
      <div>
        <h2>路由传参</h2>
        <Link to={`/dynamic/${this.state.age}`}>动态路由</Link>
        <br />
        <Link to={`/query?age=${this.state.age}&name=jack`}>query</Link>
        <br />
        <HashRouter>
          <Switch>
            <Route path='/dynamic/:age' component={Params}></Route>
            <Route path='/query' component={Params}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default PassParams
