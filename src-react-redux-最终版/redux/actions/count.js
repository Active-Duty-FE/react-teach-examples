/*
  该文件专门为 Count 组件生成 action 对象
*/
import {INCREMENT,DECREMENT} from '../constant'
// 同步 action，就是指 action 的值为 Object 类型的一般对象
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})
/*
  异步 action，就是值 action 的值为函数，异步 action 中一般都会调用同步 action，
  异步 action 不是必须要用的
*/
export const incrementAsync = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    },time)
  }
}