<!--
 * @Description: react 进阶知识
 * @Date: 2020-05-05 04:46:28
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-05 05:01:30
 * @LastEditors: JackChouMine
 -->

1. ref

ref 可获取任意 DOM 或者组件，和 vue 中 ref 类似的。在一些场景下，ref 的使用可以带来便利， 例如控制元素的焦点、文本的选择或者和第三方操作 DOM 的库集成。

① DOM 上使用 ref。
ref 接收一个回调函数作为值，在组件被挂载或卸载时，回调函数会被调用。被挂载时，回调函数会接收当前 DOM 元素作为参数;在组件被卸载时，回调 函数会接收 null 作为参数。

```js
  componentDidMount() {
    // 通过 ref 实现自动聚焦
    this.nameInput.focus()
  }
  blur() {
    // 通过 ref 实现失焦
    this.nameInput.blur()
  }
  // 其他代码省略
<input
  type="text"
  name="name"
  defaultValue="hello"
  ref={(nameInput) => {
    this.nameInput = nameInput
  }}
/>
```

② 组件上使用 ref。

```js
loginFormBlur = () => {
  //调用组件的方法
  this.loginForm.blur()
}
;<div>
  <LoginForm
    ref={(loginForm) => {
      this.loginForm = loginForm
    }}
  />
  <button onClick={this.loginFormBlur}>表单市失焦</button>
</div>
```

③ 通过 ref 获取子组件的 DOM

给组件传递自定义属性，该属性值是一个函数，和 ref 的值具备类似的参数，把这个自定义属性赋值给 子组件的 ref，就可以在父组件中获取到子组件的 DOM 了。

```js
showChildDOM = () => {
  console.log(this.booksDOM.nodeType)
}
;<Books
  listRef={(el) => {
    this.booksDOM = el
  }}
/>
```

Books

```js
<ol ref={this.props.listRef}></ol>
```
