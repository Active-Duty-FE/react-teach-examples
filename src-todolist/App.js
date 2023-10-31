import React, { Component } from 'react'
import Head from './components/Head'
import Main from './components/Main'
import Foot from './components/Foot'

import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {id:'001',name:'吃饭',done:false},
      {id:'002',name:'学习',done:true},
      {id:'003',name:'睡觉',done:false}
    ]
  }
  addTodo = todoObj => {
    const {todos} = this.state
    this.setState({todos: [todoObj,...todos]})
  }
  updateTodo = () => {
    return (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
        if(todoObj.id === id) return {...todoObj, done}
        else return todoObj
      })
      this.setState({todos: newTodos})
    }
  }
  deleteTodo = () => {
    return (id) => {
      const {todos} = this.state
      const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({todos:newTodos})
    }
  }
  checkAll = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      return {...todo,done}
    })
    this.setState({todos:newTodos})
  }
  clearDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done === false
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Head addTodo={this.addTodo} />
            <Main todos={todos} updateTodo={this.updateTodo()} deleteTodo={this.deleteTodo()}/>
            <Foot todos={todos} checkAll={this.checkAll} clearDone={this.clearDone}/>
          </div>
        </div>
      </div>
    )
  }
}
