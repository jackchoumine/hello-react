/*
 * @Description: redux
 * @Date: 2021-06-22 22:58:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-23 02:12:34 +0800
 * @LastEditors: JackChou
 */
import { createStore } from 'redux'
import countReducer from './countReducer'
const store = createStore(countReducer)
export default store
