/*
 * @Description: redux
 * @Date: 2021-06-22 22:58:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-23 02:55:44 +0800
 * @LastEditors: JackChou
 */
import { createStore, applyMiddleware } from 'redux'
import countReducer from './countReducer'
import thunk from 'redux-thunk'
const store = createStore(countReducer, applyMiddleware(thunk))
export default store
