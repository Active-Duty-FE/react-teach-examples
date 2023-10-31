import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  createIncrement,
  createDecrement,
  createIncrementAsync
} from '../../redux/count_action'
/* 第一版本
function mapStateToProps(state){
  return {count:state}
}
function mapDispatcheToProps(dispatch){
  return {
    increment: data => dispatch(createIncrement(data)),
    decrement: data => dispatch(createDecrement(data)),
    incrementAsync: (data,time) => dispatch(createIncrementAsync(data,time))
  }
}
export default connect(mapStateToProps,mapDispatcheToProps)(CountUI)
*/
/* 第二版本
const mapStateToProps = state => ({count:state})
const mapDispatcheToProps = dispatch => (
    {
      increment: data => dispatch(createIncrement(data)),
      decrement: data => dispatch(createDecrement(data)),
      incrementAsync: (data,time) => dispatch(createIncrementAsync(data,time))
    }
  )
export default connect(mapStateToProps,mapDispatcheToProps)(CountUI)
*/
/* 第三版本
export default connect(
  state => ({count:state}),
  dispatch => (
    {
      increment: data => dispatch(createIncrement(data)),
      decrement: data => dispatch(createDecrement(data)),
      incrementAsync: (data,time) => dispatch(createIncrementAsync(data,time))
    }
  )
)(CountUI)
 */
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
        <h2>当前数位{this.props.count}</h2>
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
  state => ({count:state}),
  {
    increment: createIncrement,
    decrement: createDecrement,
    incrementAsync: createIncrementAsync
  }
)(Count)


