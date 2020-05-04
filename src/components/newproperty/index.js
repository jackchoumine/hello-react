/*
 * @Description: 16 版本新特性
 * @Date: 2020-05-05 01:53:45
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-05 02:03:46
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'

class listBook extends Component {
  render() {
    const books = ['render 可返回字符串和DOM数组', 'vue', 'react', 'ng']
    return books.map((book) => <li key={book}>{book}</li>)
  }
}

export default listBook
