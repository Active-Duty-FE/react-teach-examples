import React,{useRef} from 'react'
import axios from 'axios'

export default function Search() {
  const searchInp = useRef()

  function search() {
    axios.get(`https://api.github.com/search/users?q=${searchInp.current.value}`).then((res) => {
      console.log(res);
    })
  }
  return (
    <div>
      <input type="text" ref={searchInp}/><button onClick={search}>Search</button>
    </div>
  )
}
