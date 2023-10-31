import React, { Component } from 'react'
import Item from './Item'
import './index.css'

export default class Main extends Component {
  
  render() {
    //const { todos}
    const {todos,updateTodo,deleteTodo} = this.props

    return (
      <div>
        <ul className="todo-main">
          {
              todos.map(todo => {
              return <Item {...todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            })
          }
        </ul>
      </div>
    )
  }
}
