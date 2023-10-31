import React, { useRef } from 'react'
import {connect} from 'react-redux'

import {removePerson} from '../../redux/action'

import ('./index.css')

function List(props) {
  
  function remove(todoObj) {
    return () => {
      props.removePerson(todoObj)
    }
  }
  function mouseOverHandler(i) {
    return function (e) {
      console.log('enter',i);
      if(e.target.tagName === 'BUTTON') return ;
      e.target.classList.add('on')
    }
  }
  function mouseOutHandler(i) {
    return function (e) {
      console.log('leave',e);
      if(e.target.tagName !== 'LI'){
        e.target.parentNode.classList.remove('on')
      }
      e.target.classList.remove('on')
    }
  }
  return (
    <div>
      <ul>
        {
          props.todos.todos.length !== 0 ? 
          props.todos.todos.map((n,i) => {
            return (
                <li key={i} onMouseEnter={mouseOverHandler(i)} onMouseLeave={mouseOutHandler(i)}><span>{n}</span><button onClick={remove(i)}>-</button></li>              
            )
          }) : <h2>您当前没有代办事项</h2>
        }
      </ul>
    </div>
  )
}
export default connect(
  state => ({todos:state}),
  {
    removePerson
  }
)(List)