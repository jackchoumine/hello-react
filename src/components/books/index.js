/*
 * @Description: 书组件
 * @Date: 2020-04-19 17:05:20
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 23:51:37
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
import Book from './bookFun'
class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
    this.timer = ''
    this.handleLike = this.handleLike.bind(this) // es6 的 class，需要手动绑定 this
    // this.handleDislike = this.handleDislike.bind(this)
  }
  // 在组件挂载后的模拟服务器返回数据
  componentDidMount() {
    this.timer = setTimeout(() => {
      // 使用 setSate 改变状态,会引发重新渲染
      this.setState({
        books: [
          {
            title: 'react入门',
            author: '小马',
            version: '第二版',
            like: 0,
            dislike: 0,
            bookId: (Math.random() + 1).toString(36).substring(2), // 随机字符串
          },
          {
            title: 'react进阶',
            author: '小明',
            version: '第三版',
            like: 0,
            dislike: 0,
            bookId: (Math.random() + 1).toString(36).substring(2),
          },
          {
            title: 'react专家之路',
            author: '小华',
            version: '第一版',
            like: 0,
            dislike: 0,
            bookId: (Math.random() + 1).toString(36).substring(2),
          },
        ],
      })
    }, 100)
    // new Book()// 组件函数不使用 new 调用，没有 this 绑定问题
  }
  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer)
  }
  handleDislike(id) {
    const books = this.state.books.map((book) => {
      return book.bookId === id ? { ...book, dislike: ++book.dislike } : book
    })
    this.setState({
      books,
    })
  }
  handleLike(id) {
    const books = this.state.books.map((book) => {
      return book.bookId === id ? { ...book, like: ++book.like } : book
    })
    this.setState({
      books,
    })
  }
  render() {
    const Books = (
      <ol>
        {this.state.books.map((book) => (
          <Book
            key={book.bookId}
            book={book} // 书籍信息保存在 book 属性你
            onLike={this.handleLike}
            onDislike={(id) => {
              // 自定义事件，使用箭头函数绑定事件处理器
              this.handleDislike(id)
            }}
          />
        ))}
      </ol>
    )
    return Books
  }
}
export default Books
