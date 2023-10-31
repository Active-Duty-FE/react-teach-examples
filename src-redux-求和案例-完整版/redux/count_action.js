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
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

