<!--
 * @Description: react 基础
 * @Date: 2020-04-19 15:51:27
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 17:58:50
 * @LastEditors: JackChouMine
 -->

# react 基础

## JSX 语法

JSX 是 JS 扩展语法，用来描述 UI，本质还是 JS。
为何要用 JSX?
用户界面需要解决的问题是服务器的动态数据，如何高效地显示在界面上，而用户界面和数据是分离的即界面模板代码和数据数据没有同时渲染，为了此问题，创造了各种模板。将 UI 放在模板文件中，将数据放在 JS 代码中，通过模板引擎，把数据和模板渲染成 html 代码。使用这些模板，还要学习它们的语法，且对于复杂 UI，模板难以清晰描述。

react 将 UI 分成一个个组件，组件具备描述 UI 和数据的完成功能，不应该分开，所以开发了 JSX。

疑问：
① UI 和数据分离，是什么意思？
② 分离和不分离分优劣是什么？

### 基本语法

使用成对的 html 标签构成一个描述 UI 的元素。

```jsx
const element = (
  <div>
    <h1>hello react</h1>
  </div>
)
```

### 标签类型

dom 类型，使用是必须小写，react 组件类型，使用时首字母必须大写，react 通过首字母大小写来区分它们。

### JS 表达式

在 JSX 中使用表达式，需要使用`{}`将表达式括起来。两种场景：

1. 给标签属性赋值

```jsx
const element = <MyComponent foo={1 + 2} /> // 没有子节点，可自闭合
```

2. 定义子组件

```jsx
const todos = ['up', 'eat', 'school']
const todoList = (
  <ul>
    {todos.map((todo) => (
      <li>{todo}</li> // 这里定义了 li 组件
    ))}
  </ul>
)
```

3. 标签属性

dom 类型的标签，大部分属性和 html 一致，部分属性改变：
classs 变为 className，因为 class 是 ES6 保留字，
onclick 变成 onClick,react 对事件进行了封装，采用小托峰式名字事件。

```jsx
const element = (
  <div
    id="content"
    className="foo"
    onClick={() => {
      console.log('Hello,React')
    }}
  />
)
```

组件类型，了自定义属性名。

4. 注释

注释写在`{}`中，使用多行注释，`/**/`

```jsx
const element = (
  <div>
    {/*这里是一个注释*/}
    {/*不可以使用单行注释*/}
    <span>React</span>
  </div>
)
```

5. JSX 是必需的吗？

JSX 是 `React.createElement(component,props,...children)`的语法糖，使用 JSX 阅读性更好，UI 结构更清晰。

## 组件

react 将 UI 分成独立可复用的组件.
根据定义方式不同，可分为函数组件和类组件。

1. 类组件
   需要满足两个条件：
   ① class 继承自 React.Component;
   ② 类必须具有 render 函数，且返回代表该组件的 UI 元素。

```js
/*
 * @Description: 书组件
 * @Date: 2020-04-19 17:05:20
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-19 17:18:44
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
class BookComponent extends Component {
  render() {
    const bookList = ['react入门', 'react进阶', 'react专家之路']
    const Books = (
      <ol>
        {bookList.map((book) => (
          <li>{book}</li>
        ))}
      </ol>
    )
    return Books
  }
}
export default BookComponent
```

2. 组件 props (属性)
   以上定义了一个图书列表组件，我想要在添加一本书籍和添加图书作、版本等信息时，要去修改组件，会比较麻烦。如果能在图书列表组件 Books 中使用一个 Book 组件接收图书信息，在 Books 中维护这些图书信息，然后传递给 Book，那将是很好的。

```js
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
```

在图书列表组件中使用图书组件

```js
import React, { Component } from 'react'
import Book from './book' // 引入图书组件
class BookComponent extends Component {
  render() {
    const bookList = [
      { title: 'react入门', author: '小马', version: '第二版' },
      { title: 'react进阶', author: '小明', version: '第三版' },
      { title: 'react专家之路', author: '小华', version: '第一版' },
    ]
    const Books = (
      <ol>
        {/*<Book {...book} /> 还可以这样传递 推荐分分开传递，传递的属性会更加清晰，不会传递多余的属性*/}
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
```
