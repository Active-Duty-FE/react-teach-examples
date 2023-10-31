import React from 'react'
import store from '../redux/store'

export default function Demo2() {
  function check(params) {
    console.log(store.getState());
  }
  return (
    <div>
      <ul>
        {/*todos.map((n) => {
          <li>{n}</li>
        })*/}
      </ul>
      <button onClick={check}>CheckState</button>
    </div>
  )
}
