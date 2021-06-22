/*
 * @Description: reducer
 * @Date: 2021-06-22 23:07:25 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-23 02:11:21 +0800
 * @LastEditors: JackChou
 */
import { INCREMENT, DECREMENT } from './actions'
const countReducer = (preState = 0, action) => {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return 0
  }
}

export default countReducer
