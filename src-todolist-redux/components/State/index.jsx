import React from 'react'
import {connect} from 'react-redux'

import {removeAll} from '../../redux/action'

function State(props) {
  function removeAll() {
    props.removeAll()
  }
  return (
    <div>
      当前有 {props.length} 个 代办事项 
      <button onClick={removeAll}>删除全部</button>
    </div>
  )
}
export default connect(
  state => 
    ({length: state.todos.length}),
  {
    removeAll
  }
)(State)
