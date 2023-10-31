import React,{useRef} from 'react'
import store from '../redux/store'

export default function Demo1() {
  const input = useRef()
  function add(){
    store.dispatch({type:'add',data:input.current.value})
  }
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={add}>Add</button>
    </div>
  )
}
