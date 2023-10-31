import React,{Component, useState, useRef,createRef} from 'react'
import * as _ from './styled/components'

class App extends Component {
  state = {
    count: 0
  }
  getFormValue = function(formName){
    return this[formName].value * 1
  }
  add = () => {
    this.setState({count: this.state.count + this.getFormValue('select')})
  }
  minus = () => {
    this.setState({count: this.state.count - this.getFormValue('select')})
  }
  addIfOdd = () => {
    Math.abs(this.state.count % 2) === 1 && 
    this.setState({count: this.state.count + this.getFormValue('select')})
  }
  addAsync = () => {
    setTimeout(()=>{
      this.setState({count: this.state.count + this.getFormValue('select')})
    },500)
  }
  render(){
    return (
      <_.container>
        <_.section>
          <_.h1>Count: {this.state.count}</_.h1>
          <_.select ref = {c => this.select = c}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </_.select>
        </_.section>
        <_.section>
          <_.button onClick={this.add}>+</_.button>
          <_.button onClick={this.minus}>-</_.button>
          <_.button type='primary' onClick={this.addIfOdd}>当前求和为奇数再加</_.button>
          <_.button type="warn" onClick={this.addAsync}>异步加</_.button>
        </_.section>
      </_.container>
    )
  }
}
export default App