/*
 * @Description:
 * @Date: 2021-06-22 14:34:00 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-06-22 15:04:37 +0800
 * @LastEditors: JackChou
 */
const express = require('express')
const app = express()
const port = 4000
app.use((req, res, next) => {
  console.log('请求到达')
  console.log(req.url)
  next()
})
app.get('/students', (req, res) => {
  const students = [
    { name: 'jack', id: '429472984792' },
    { name: 'Tom', id: '429472984faf' },
  ]
  res.send(students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
