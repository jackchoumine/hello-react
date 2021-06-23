This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 项目记录

### 配置代理

`npm i -D http-proxy-middleware`

```js
const { createProxyMiddleware } = require('http-proxy-middleware')
const proxy = createProxyMiddleware
module.exports = function (app) {
  const dev1 = proxy('/api', {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
  const dev2 = proxy('/api2', {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
  app.use(dev1, dev2)
}
```

### antd 按需导入配置

安装依赖，版本如下，需要特别注意 less-loader 的版本，高版本的后面可能会报错。

```bash
"babel-plugin-import": "^1.13.3",
"customize-cra": "^1.0.0",
"react-app-rewired": "^2.1.8",
"antd": "^4.16.3",
"less": "^4.1.1",
"less-loader": "7.1.0",
```

根目录下编写`config-override.js`

```js
const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': 'green' },
    },
  })
)
```

改写 scripts:

```js
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
```

GC 中的垃圾是什么？

- 程序中不再需要使用的对象

GC 算法：

- 如何查找垃圾、释放空间（查找和释放遵循的规则）

常用的 GC 算法

引用计数

核心思想：设置引用数，判断当前计数为 0 ，可回收。

引用计数器

当引用关系改变，修改引用数字

优点：① 发现垃圾，立即回收 ② 最大程度减少程序暂停

缺点：① 无法回收循环引用的对象 ② 时间开销大

```js
function fn() {
  const obj1 = {}
  const obj2 = {}
  // 循环引用
  obj1.name = obj2
  obj2.name = obj1
  return ''
}
```

标记清除

核心思想：标记和清除两个阶段

1. 遍历所有对象，标记活动对象

2. 遍历所有对象，清除没有标记的对象

优点：可释放循环引用

缺点：空间碎片化，内存利用率低，不能立即清除

标记整理

标记清除的加强

优点：空间利用率高

### v8 引擎

V8 即时编译

V8 内存有上限

V8 垃圾回收策略

分代回收思想

内存新生代、老生代

## 提高性能的方法

1. 避免全局变量 ---- 持续占据内存

禁用 var 声明变量，优先使用 const 定义变量。

2. 避免全局查找

把从 window 上查找的变量使用变量保存起来。

```js
function fn() {
  const h = window.innerHeight
  console.log(h)
}
```

3. 避免循环引用

4. 使用字面量代替 new

5. 使用 setTimeout 代替 setInterval

<!-- TODO WHY -->

6. 使用事件委托代替循环添加事件

7. 合并循环变量和条件

一般收益很小。

8. 数组循环优化

先获取循环边界。

9. 使用文档碎片代替多次 append

10. 使用 clone 代替 create

<!--TODO  WHY -->

可以克隆属性，免去后续属性的添加。

11. 使用 innerHTML 创建 DOM

```js
const arrList = []
let n = 10
while (n--) {
  arrList.push(`<p>${n}</p>`)
}
document.body.innerHTML = arrList.join('')
```

12. 提前 return ，减少条件判断嵌套

13. 减少作用域链查找层级

查找层级越短，性能越高。

14. 减少数据读取次数

读取对象上的属性，要是多次使用某个属性，要提前缓存。

15. 字面量和构造函数

```js
function test() {
  const obj = new Object()
  obj.name = 'jack'
  obj.age = 28
}
function test() {
  const obj = { name: 'jack', age: 28 }
}
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1grs4x348cij31b60h2dia.jpg)

使用 new 创建基本数据类型，差异更加明显：

![](https://tva1.sinaimg.cn/large/008i3skNgy1grs4zwhbtoj31p00h2wgy.jpg)

16. 减少循环体活动

```js
function test() {
  const arr = ['1', 2, { name: 'jack' }]
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
function test() {
  const arr = ['1', 2, { name: 'jack' }]
  // 提前获取循环次数
  const size = arr.length
  for (let i = 0; i < size; i++) {
    console.log(arr[i])
  }
}
```

![](https://tva1.sinaimg.cn/large/008i3skNly1grs58erx7cj31eg0gc0vt.jpg)

while 循环：

![](https://tva1.sinaimg.cn/large/008i3skNgy1grs5dpd0izj31b60pq43e.jpg)

声明式的 forEach

![](https://tva1.sinaimg.cn/large/008i3skNgy1grs5h0whi4j31bo0u0q9c.jpg)

结论：从语义和性能考虑，优先使用 forEach 和 while

17. 减少声明及语句数

不会多次使用的变量，直接获取。

```js
const div = document.getElementById('box')
function test(ele) {
  const h = ele.offsetHeight
  const w = ele.offsetWidth
  return w * h
}
function test(ele) {
  return ele.offsetHeight * ele.offsetWidth
}
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1grs5tsi1jkj31fk0hijtz.jpg)

> 原因：js 引擎在编译 js 代码时，分析语句要消耗时间。

18. 惰性函数和性能

```js
function onEvent(dom, type, handler) {
  if (dom.addEventListener) {
    onEvent = dom.addEventListener(type, handler, false)
  } else if (dom.attachEvent) {
    onEvent = dom.attachEvent('on' + type, handler)
  } else {
    onEvent = dom['on' + type] = handler
  }
  return onEvent
}

function onEvent(dom, type, handler) {
  if (dom.addEventListener) {
    dom.addEventListener(type, handler, false)
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, handler)
  } else {
    dom['on' + type] = handler
  }
}
```
