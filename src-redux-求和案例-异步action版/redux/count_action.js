/**
 * 该文件专门为 Count 组件生成 action 对象
 */
/*
export function createIncrementAction(data){
  return { type:'increment',data }
}
export function createDecrementAction(data){
  return { type:'decrement',data }
}
以下为精简写法
*/
// 同步 action, 是指 action 的值为 Object 类型的一般对象
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
// 异步 action, 是指 action 的值为函数,异步 action 中一般都会调用同步 action
export const createIncrementAsyncAction = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    },time)
  }
}
