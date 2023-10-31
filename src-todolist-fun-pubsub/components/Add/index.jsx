import React,{useRef,useState,useEffect} from 'react'
import Pubsub from 'pubsub-js'

export default function Add() {
  const addInput = useRef()
  function add() {
    Pubsub.publish('count',addInput.current.value)
    addInput.current.value = ''
  }
  return (
    <div>
      <input type="text" ref={addInput} /><button onClick={add}>ADD</button>
    </div>
  )
}
