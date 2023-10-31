import React,{useState,useEffect} from 'react'
import Pubsub from 'pubsub-js'

export default function State() {
  const [length,setLength] = useState(0)
  useEffect(() => {
    const token = Pubsub.subscribe('count',(_,obj) => {
      setLength(() => obj.length)
    })
    return () => {
      Pubsub.unsubscribe(token)
    }
  },[])
  return (
    <div>
      总共有 {length} 个 TODOs
    </div>
  )
}
