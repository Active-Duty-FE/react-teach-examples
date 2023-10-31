import React, { Component } from 'react'
import './index.css'

export default class Foot extends Component {
  handleCheckAll = (e) => {
    this.props.checkAll(e.target.checked)
  }
  clearDone = () => {
    this.props.clearDone()
  }
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,cur) => {
      return pre + (cur.done ? 1 : 0)
    },0)
    const total = todos.length
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" checked={total === doneCount && total !== 0} onChange={this.handleCheckAll} />
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button className="btn btn-danger" onClick={this.clearDone}>清除已完成任务</button>
        </div>
      </div>
    )
  }
}
