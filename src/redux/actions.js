/*
 * @Description: actions
 * @Date: 2021-06-23 01:56:35 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-23 03:17:46 +0800
 * @LastEditors: JackChou
 */
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const increment = value => ({ type: INCREMENT, data: value })
export const decrement = (value, timeout) => dispatch => {
  setTimeout(() => {
    // TODO 拿到异步任务的结果
    dispatch(increment(-1 * value))
  }, timeout)
}
