import {ADD_PERSON} from '../constant'
const initState = [{id:'001', name:'tom',age:18}]
export default function personReducer(preState=initState,action){
  const {type, data} = action
  switch(type){
    case ADD_PERSON:
      // preState.unshift(data)
      // 此处不可以这样写，这样会导致 preState 被改写了，personReducer 就不是纯函数了
      return [data,...preState]
    default:
      return preState
  }
}