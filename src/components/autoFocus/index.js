/*
 * @Description: 使用ref 主动聚焦
 * @Date: 2020-05-05 03:59:09
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-05 04:03:38
 * @LastEditors: JackChouMine
 */

import { Component } from 'react'
class AutoFocusTextInput extends Component {
  componentDidMount() {
    // 组件挂载后自动聚焦
    this.textInput.focus()
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => {
            this.textInput = input
          }}
        />
      </div>
    )
  }
}
export default AutoFocusTextInput
