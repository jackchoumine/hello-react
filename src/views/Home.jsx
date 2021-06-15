import React, { Component } from 'react'
import { LoginForm, ListBook, Books, WithPersistentData } from '../components'
import { HashRouter, Route, Link } from 'react-router-dom'
const HocListBook = WithPersistentData(ListBook)

class Home extends Component {
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
          <br />
          <Link to='/render'>render例子</Link>
          {/*  类似 <router-view />  */}
          <Route path='/form' component={LoginForm} />
          <Route path='/books' component={Books} />
          <Route path='/list-books' component={HocListBook} />
          <Route
            path='/render'
            render={() => {
              return <h3>render函数</h3>
            }}
          />
        </div>
      </HashRouter>
    )
  }
}

export default Home
