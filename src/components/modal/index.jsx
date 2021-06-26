/*
 * @Description: 弹窗
 * @Date: 2020-05-05 02:10:32
 * @Author: JackChouMine
 * @LastEditTime: 2021-06-26 09:49:18 +0800
 * @LastEditors: JackChou
 */
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
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
    const modal = createPortal(
      <div className='modal'>
        <span className='close' onClick={this.props.onClose}>
          &times;
        </span>
        <div className='content'> {this.props.children}</div>
      </div>,
      this.container
    )
    return modal
  }
}
export default Modal
