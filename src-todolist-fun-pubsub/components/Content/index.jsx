import React,{useState,useEffect} from 'react'
import Pubsub from 'pubsub-js'
import {nanoid} from 'nanoid'
export default function Content() {
  const [todoList,setTodoList] = useState(['aa','bb'])
  const token = Pubsub.subscribe('count',(_,todos) => {
    setTodoList(proeTodos => [todos,...proeTodos])
  })
  useEffect(() => {
    console.log(todoList);
    return () => {
      Pubsub.unsubscribe(token)
    }
  },[])
  return (
    <div>
      <ul>
        {todoList.map(n => <li key={nanoid()}>{n}</li>)}
      </ul>
    </div>
  )
}
