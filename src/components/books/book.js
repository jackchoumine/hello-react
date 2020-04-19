/*
 * @Description: 图书组件
 * @Date: 2020-04-19 17:39:51
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 18:41:43
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
class BookComponent extends Component {
  constructor(props) {
    // 构造函数介绍传递进来的属性
    super(props)
    this.state = {
      // 定义内部状态
      like: 0,
      dislike: 0,
    }
  }
  vote() {
    // ++this.state.like //不能直接修改状态
    let { like } = this.state
    this.setState({
      // like: ++this.state.like,// 不能直接修改state
      like: ++like,
    })
  }
  hate() {
    let { dislike } = this.state
    this.setState({
      dislike: ++dislike,
    })
  }
  render() {
    const { title, author, version } = this.props // 所有传递进来的属性会组成一个简单的对象
    const Book = (
      <li>
        <h2>{title}</h2>
        <p>作者：{author}</p>
        <p>版本：{version}</p>
        <button
          onClick={() => {
            this.vote()
          }}
        >
          喜欢
        </button>
        &nbsp;&nbsp;
        <span>{this.state.like}</span>
        <br />
        <button
          onClick={() => {
            this.hate()
          }}
        >
          不喜欢
        </button>
        &nbsp;&nbsp;
        <span>{this.state.dislike}</span>
      </li>
    )
    return Book
  }
}
export default BookComponent
