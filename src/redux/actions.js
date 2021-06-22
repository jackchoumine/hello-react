/*
 * @Description: actions
 * @Date: 2021-06-23 01:56:35 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-23 02:02:17 +0800
 * @LastEditors: JackChou
 */
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const increment = value => ({ type: INCREMENT, data: value })
export const decrement = value => ({ type: DECREMENT, data: value })
