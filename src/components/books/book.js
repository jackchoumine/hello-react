/*
 * @Description: 图书组件
 * @Date: 2020-04-19 17:39:51
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 17:53:09
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
class BookComponent extends Component {
  render() {
    const { title, author, version } = this.props //所有传递进来的属性会组成一个简单的对象
    const Book = (
      <li>
        <h2>{title}</h2>
        <p>作者：{author}</p>
        <p>版本：{version}</p>
      </li>
    )
    return Book
  }
}
export default BookComponent
