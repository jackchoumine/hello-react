import { PureComponent } from 'react'
import { createPortal } from 'react-dom'
export class Modal extends PureComponent {
  render() {
    const { children } = this.props
    return createPortal(children, document.getElementById('modal'))
  }
}

export default Modal
