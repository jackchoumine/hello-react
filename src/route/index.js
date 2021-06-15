/*
 * @Description: 路由配置
 * @Date: 2021-06-14 21:37:38 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-14 21:49:54 +0800
 * @LastEditors: JackChou
 */
import App from '../views/aApp'
import { LoginForm, Books } from '../components'
export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'form',
      component: LoginForm,
    },
    {
      path: 'books',
      component: Books,
    },
  ],
}
