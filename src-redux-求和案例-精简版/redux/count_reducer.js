/**
 * 1. 该文件用于创建一个为 Count 组件服务的 reducer，reducer 本质就是一个函数
 * 2. reducer函数会接收两个参数，分别为：之前的状态（preState），动作对象（action）
 */
const initState = 0
export default function counterReducer(preState = initState,action){
  // if(preState === undefined ) preState = 0
  const {type,data} = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}