/*
 * @Description: 登录表单→受控组件
 * @Date: 2020-05-03 22:18:31
 * @Author: JackChouMine
 * @LastEditTime: 2020-05-04 00:00:55
 * @LastEditors: JackChouMine
 */
import React, { Component } from 'react'
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      city: '成都',
      intro: '自我介绍',
      skills: [
        {
          name: 'vue',
          checked: true,
        },
        {
          name: 'react',
          checked: false,
        },
        {
          name: 'ng',
          checked: false,
        },
      ],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.cityList = ['成都', '北京', '上海']
  }
  handleChange(event) {
    const target = event.target
    this.setState({ [target.name]: target.value }) // note 使用元素的 name 作为key，可省略很多代码
  }
  handleCheckbox(event) {
    const target = event.target
    const skills = this.state.skills.map((skill) => {
      if (skill.name === target.name) {
        skill.checked = target.checked
      }
      return skill
    })
    this.setState({ skills: skills })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('非受控组件', this.nameInput.value)
    console.log(this.state)
  }
  render() {
    const loginForm = (
      <form onSubmit={this.handleSubmit}>
        <label>
          用户名：
          <input
            type="text"
            name="name"
            defaultValue="hello"
            ref={(nameInput) => (this.nameInput = nameInput)}
          />
        </label>
        <br />
        <label>
          密 码：
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          自我介绍：
          <textarea
            name="intro"
            rows="4"
            cols="50"
            onChange={this.handleChange}
            value={this.state.intro}
          ></textarea>
        </label>
        <br />
        <label>
          城市：
          <select
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          >
            {this.cityList.map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <br />
        技能：
        {this.state.skills.map((skill) => (
          <label key={skill.name}>
            {skill.name}
            <input
              type="checkbox"
              name={skill.name}
              checked={skill.checked}
              onChange={this.handleCheckbox}
            />
          </label>
        ))}
        <br />
        <input type="submit" value="登录" />
      </form>
    )
    return loginForm
  }
}

export default LoginForm
