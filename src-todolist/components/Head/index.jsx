import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import './index.css'

export default class Head extends Component {
  inputHandler = event => {
    const { target, keyCode } = event
    if(keyCode !== 13) return
    if(target.value === '') {
      alert('请输入内容')
      return}
    let id = nanoid()
    this.props.addTodo({
      id: id,
      name: target.value,
      done: false
    })
    target.value = ''
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input onKeyUp={this.inputHandler} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      </div>
    )
  }
}
