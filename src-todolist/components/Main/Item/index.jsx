import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse:false
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  handleInput = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }
  handleDelete = (id) => {
    return () => {
      if(window.confirm('确认删除吗？')){
        this.props.deleteTodo(id)
      }
      
    }
  }
  render() {
    const {mouse} = this.state
    const {id, name, done} = this.props
    return (
      <div onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <li style={{background:mouse ? '#ddd' : '#fff'}}>
          <label>
            <input checked={done} type="checkbox" onChange={this.handleInput(id)} />
            <span>{name}</span>
          </label>
          <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? 'block' : 'none'}}>删除</button>
        </li>
      </div>
    )
  }
}
