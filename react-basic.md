<!--
 * @Description: react 基础
 * @Date: 2020-04-19 15:51:27
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-20 01:22:37
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

3. 组件状态 state

state 是组件的内部状态，state 的变化会反映到组件上。在构造方法中的 `this.state` 对象中定义初始状态，使用`this.setState`方法改变组件状态（**唯一改变组件状态的方法**），组件会重新渲染。

给每一本书添加一个点赞按钮，没有点击一次，页面上喜欢就增加一次。

```js
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
    let { like } = this.state
    // this.state = {
    //   // 不能直接改变 state
    //   vote: vote,
    // }
    this.setState({
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
```

```js
constructor(props) {
    // 构造函数介绍传递进来的属性
    super(props) // 调用父类的构造函数
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
```

UI = Component(props,state), 组件可看成一个函数，输入外部的属性 props 和内部状态 state, 输出组件的 UI。

4. 无状态组件
   上面的 Book 组件内部有 state，组件需要维持这个状态，叫作状态组件， 图书列表 Books，没有定义 state，叫作无状态组件。
   无状态组件不关注内部状态，专注 UI 展示，还可使用函数还定义无状态组件，此时组件也叫函数组件，props 作为函数参数传入。

Book 组件维持 like 和 dislike 状态，这些属性作为书籍的属性传入更加适合，故可以把 Book 组件定义成函数组件，专注展示书籍信息，数据和事件处理函数从外部传入。

一个函数组件接收 props 作为参数，返回代表 UI 的 react 元素。

```js
function Welcome(props) {
  return <h1>hello,{props.name}</h1>
}
```

将 Book 组件改成函数组件

```js
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
```

注意点：

1. 子组件的事件处理函数是通过 `props` 传递进来，并且不需要处理 this，因为函数组件没有使用 new 调用；
2. 所有传递给组件的属性，都会组成一个 props 对象的形式传递进来，**函数也在该对象里**。

使用函数函数组件

```js
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
```

主要改进：

1. 将书籍信息作为图书列表组件的一个状态，并从服务器请求数据以更新状态。
2. 将图书信息放在一个对象中，并通过 `props` 传递给传递给图书组件；
3. 图书组件（子组件）内部的事件处理函数，也是从通过 `props` 传递进来的；
4. 处理图书信息的逻辑在图书列表组件（父组件）定义，在子组件中调用；

函数组件只关注**数据输入**、**展示数据**，甚至 **业务逻辑都可以从父组件传入**，子组件只负责调用，这样才能保证组件*高内聚、低耦合*，复用性好。

<!-- todo -->

比较 react 自定义事件和 vue 自定义事件的区别：

几中事件绑定的区别：

5. 属性校验和默认属性

和 vue 一样，react 也可以可对 props 进行校验和提供默认值。react 通过`propTypes` 和 `PropTypes` 实现该功能。
propTypes 的 key 是 props 的属性，值从 PropTypes 中获取。

给图书图书的函数组件添加 props 检查：

```js
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
```

6. 组件的样式
   给组件添加样式的方式有两种：外部样式和内联样式

①. 外部样式引入的两种方式
在使用组件的 html 也页面中引入：

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

样式表文件作用于整个应用的所 有组件(一般是基础样式表)。
把组件当成一个模块引入组件，样式 表作用于某个组件。在应用入口引入的样式也会作用于整个应用。
解决 calss 冲突————使用 CSS Modules。

②. 内联样式
将样式属性写成 JS 对象，使用 style 属性引入。
**具有中划线的样式属性，要采用小驼峰名名。**

7. react 元素和 react 组件
   react 元素是一个描述 react 组件的 JS 对象，react 组件时一个 class 或者函数。

8. 组件生命周期
   组件从被创建到被销毁的过程称为组件的生命周期。React 为组件 在不同的生命周期阶段提供不同的生命周期方法，让开发者可以在组件 的生命周期过程中更好地控制组件的行为。通常，组件的生命周期可以 被分为三个阶段:**挂载阶段**、**更新阶段**、**卸载阶段**。_只有类组件有生命周期方法，函数组件没有。_

Ⅰ . 挂载阶段

初始化，挂载到 DOM，完成第一次渲染。依次调用到的函数为：

① constructor -- constructor 通常用于初始化组 件的 state 以及绑定事件处理方法等工作。

② componentWillMount -- 组件被挂载到 DOM 前调用，且只会被调用一次。很少用到，这里的操作可放在 constructor 中，调用`this.setState` 组件不会重新渲染。

③ render -- 唯一必要的方法,返回一个 react 元素，渲染工作是 react 完成的。纯函数，不能执行用副作用的操作，不能调用 `this.setSate`，会改变组件状态进入死循环。

④ componentDidMount -- 完成挂载，只执行一次。可获取 DOM，**经常在此进行服务器请求**。调用 `this.setSate` 会引起组件重新渲染。

Ⅱ . 更新阶段

组件被挂载到 DOM 后，组件的 props 或 state 可以引起组件更新。props 引起组件更新，是因为父组件调用了 render。依次调用的方法：

① componentWillReceiveProps -- 接受父组件传递的 props 作为参数。 父组件 render 方法的调用 并不能保证传递给子组件的 props 发生变化，也就是说 nextProps 的值可 能和子组件当前 props 的值相等，因此往往需要比较 nextProps 和 this.props 来决定是否执行 props 发生变化后的逻辑，比如根据新的 props 调用 this.setState 触发组件的重新渲染。

② shouldComponentUpdate -- 决定组件是否更新。返回 fasle，组件不会更新，后面的方法不调用。通过比较 nextProps、 nextState 和组件当前的 props、state 决定这个方法的返回结果。这个方法 可以用来减少组件不必要的渲染，从而优化组件的性能。

③ componentWillUpdate -- render 调用前执行，可以作为组件更新发生前执行 某些工作的地方，一般也很少用到。

④ render -- 返回 react 元素。shouldComponentUpdate、componentWillUpdate(nextProps, nextState)，不能调用 setState，否则组件死循环，永远无法渲染。

⑤ componentDidUpdate -- 组件更新后调用，可操作 DOM。componentDidUpdate(prevProps, prevState)。

Ⅲ . 卸载阶段

componentWillUnmount，执行一些清楚工作，比如清楚定时器，清除手动创建的 DOM。
