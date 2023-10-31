/*
1. 该文件是用于创建一个为 Count 组件服务的 reducer，reducer 的本质就是一个函数
2. reducer 函数会接受到两个参数，分别为：之前的装填（preState）,动作对象（action）
*/
const initState = 0
export default function countReducer(preState=initState,action){
  const {type, data} = action
  switch (type){
    // 根据 type 决定如何加工数据
    case "increment":
      return preState + data
    case "decrement":
      return preState - data
    default:
      return preState
  }
}