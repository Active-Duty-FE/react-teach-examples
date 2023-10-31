import React, { Component } from 'react'
import store from '../../redux/store'
//引入 actionCreato, 专门用于创建 action 对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {
  componentDidMount(){
    // 检测 redux 中状态的变化，只要有变化，就调用 render
    store.subscribe(() => {
      this.setState({})
    })
  }
  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
  }
  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0){
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    //setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(value * 1,500))
    //},500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为{store.getState()}</h1>
        <select ref={c => this.selectNumber = c }>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>AddIfOdd</button>
        <button onClick={this.incrementAsync}>AddAsync</button>
      </div>
    )
  }
}
