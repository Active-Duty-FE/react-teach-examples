import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  createIncrement,
  createDecrement,
  createIncrementAsync
} from '../../redux/actions/count'
class Count extends Component {
  select = React.createRef()
  increment = () => {
    const {value} = this.select.current
    this.props.increment(value * 1)
  }
  decrement = () => {
    const {value} = this.select.current
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    const {value} = this.select.current
    if(this.props.count % 2 !== 0){
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    const {value} = this.select.current
    this.props.incrementAsync(value * 1,500)
  }
  render() {
    return (
      <div>
        <h2>当前数位{this.props.count},下面的人的总数为{this.props.personsLength}</h2>
        <select ref={this.select}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>Add If Odd</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>Async</button>
      </div>
    )
  }
}
export default connect(
  state => ({count:state.count,personsLength:state.persons.length}),
  {
    increment: createIncrement,
    decrement: createDecrement,
    incrementAsync: createIncrementAsync
  }
)(Count)


