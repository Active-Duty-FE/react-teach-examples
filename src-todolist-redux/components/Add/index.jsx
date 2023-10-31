import React,{useRef}from 'react'
import {connect} from 'react-redux'

import {addPerson} from '../../redux/action'


function Add(props) {
  const addInp = useRef()
  function add(e) {
    if(e.key === 'Enter' || e.type === 'click'){
      if(!addInp.current.value){
        alert('代办事项不能为空')
      }else{
        props.addPerson(addInp.current.value)
        addInp.current.value = ''
      }
    }
  }
  return (
    <div>
      <input type="text" ref={addInp} onKeyUp={add} /><div><button onClick={add}> + </button></div>
    </div>
  )
}
export default connect(null,{
  addPerson
})(Add)
