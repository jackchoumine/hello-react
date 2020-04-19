/*
 * @Description: 书组件
 * @Date: 2020-04-19 17:05:20
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 17:55:12
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
import Book from './book'
class BookComponent extends Component {
  render() {
    const bookList = [
      { title: 'react入门', author: '小马', version: '第二版' },
      { title: 'react进阶', author: '小明', version: '第三版' },
      { title: 'react专家之路', author: '小华', version: '第一版' },
    ]
    const Books = (
      <ol>
        {/*<Book {...book} /> 还可以这样传递*/}
        {/* 所有属性会组成一个对象传递给 props */}
        {bookList.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            version={book.version}
          />
        ))}
      </ol>
    )
    return Books
  }
}
export default BookComponent
