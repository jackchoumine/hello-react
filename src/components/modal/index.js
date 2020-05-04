/*
 * @Description: 弹窗
 * @Date: 2020-05-05 02:10:32
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-05 02:18:39
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
class Modal extends Component {
  constructor(props) {
    super(props)
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }
  componentWillUnmount() {
    document.body.removeChild(this.container)
  }
  render() {
    const modal = ReactDOM.createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose}>
          &times;
        </span>
        <div className="content"> {this.props.children}</div>
      </div>,
      this.container
    )
    return modal
  }
}
export default Modal
