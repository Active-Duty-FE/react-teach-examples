import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  function back(){
    navigate(-1)
  }
  function forward(){
    navigate(1)
  }
  return (
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={back}>&lt;</button>
          <button onClick={forward}>&gt;</button>
        </div>
      </div>
    </div>
  )
}
