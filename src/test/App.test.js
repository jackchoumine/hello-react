/*
 * @Description: 测试
 * @Date: 2020-04-19 15:27:52 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-15 21:08:05 +0800
 * @LastEditors: JackChou
 */
import React from 'react'
import { render } from '@testing-library/react'
import App from './views/App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
