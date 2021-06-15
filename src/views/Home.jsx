import React, { Component } from 'react'
import { LoginForm, ListBook, Books, WithPersistentData } from '../components'
import { HashRouter, Route, Link } from 'react-router-dom'
const HocListBook = WithPersistentData(ListBook)

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <HashRouter>
        <div>
          <h2>hash 基本配置例子</h2>
          <br />
          <Link to='/form'>表单</Link>
          <br />
          <Link to='/books'>书籍</Link>
          <br />
          <Link to='/list-books'>书籍列表</Link>
          {/*  类似 <router-view />  */}
          <Route path='/form' component={LoginForm} />
          <Route path='/books' component={Books} />
          <Route path='/list-books' component={HocListBook} />
        </div>
      </HashRouter>
    )
  }
}

export default Home
