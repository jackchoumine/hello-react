/*
 * @Description: 函数组件
 * @Date: 2020-04-19 19:04:00
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 23:51:01
 * @LastEditors: JackChouMine
 */
import React from 'react'
function BookFun(props) {
  const {
    book: { title, author, version, bookId, dislike, like },
  } = props // 所有传递进来的属性会组成一个简单的对象
  const handleLike = () => {
    props.onLike(bookId)
  }
  const Book = (
    <li>
      <h2>{title}</h2>
      <p>作者：{author}</p>
      <p>版本：{version}</p>
      <button onClick={handleLike}>喜欢</button>
      &nbsp;&nbsp;
      <span>{like}</span>
      <br />
      <button
        onClick={(event) => {
          console.log(event) //使用箭头函数绑定事件处理器
          props.onDislike(bookId)
        }}
      >
        不喜欢
      </button>
      &nbsp;&nbsp;
      <span>{dislike}</span>
    </li>
  )
  return Book
}
export default BookFun
