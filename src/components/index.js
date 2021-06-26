/*
 * @Description: 组件入口
 * @Date: 2020-04-19 17:04:44
 * @Author: JackChouMine
 * @LastEditTime: 2021-06-26 09:52:00 +0800
 * @LastEditors: JackChou
 */
import books from './books'
import { loginForm } from './form'
import listBook from './newproperty'
import withPersistentData from './presistent-data'
import params from './params'
import http from './http'
export const Books = books
export { MyForm } from './form'
export { Modal } from './portals'
export const HttpDemo = http
export const LoginForm = loginForm
export const ListBook = listBook
export const WithPersistentData = withPersistentData
export const Params = params
