import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h2>我是Home</h2>
      {sum === 2 ? <Navigate to="/about" /> : <h3>当前sum只是：{sum}</h3>}
      <button onClick={() => setSum(2)}>点我sum变为2</button>
    </div>
  )
}
