/*
 * @Description: 函数组件
 * @Date: 2020-04-19 19:04:00
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-20 01:21:21
 * @LastEditors: JackChouMine
 */
import React from 'react'
import PropTypes from 'prop-types'
import './book.css'
function BookFun(props) {
  const {
    book: { title, authors, version, bookId, dislike, like, price = 39 },
  } = props // 所有传递进来的属性会组成一个简单的对象
  const handleLike = () => {
    props.onLike(bookId)
  }
  const authorsStyle = {
    backgroundColor: 'gray'
  }
  const Book = (
    <li>
      <h2>{title}</h2>
      <p style={authorsStyle}>作者：{authors.join('、')}</p>
      <p>版本：{version}</p>
      <p>价格：{price}￥</p>
      <button onClick={handleLike} className="like">喜欢</button>
      &nbsp;&nbsp;
      <span>{like}</span>
      <br />
      <button
        onClick={(event) => {
          console.log(event) //使用箭头函数绑定事件处理器
          props.onDislike(bookId)
        }}
        className="dislike"
      >
        不喜欢
      </button>
      &nbsp;&nbsp;
      <span>{dislike}</span>
    </li>
  )
  return Book
}
// props 类型约束
// todo 如何自定义检查函数
BookFun.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    version: PropTypes.string,
    price: PropTypes.number,
    like: PropTypes.number,
    disLike: PropTypes.number,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
}
// todo 如何该props的内层属性设置默认值 属性默认值
// BookFun.defaultProps = { book.price: 39 }
export default BookFun
