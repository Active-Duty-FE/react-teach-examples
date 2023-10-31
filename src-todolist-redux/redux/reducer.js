const initState = {
  todos:['aaa','bbb','ccc','ddd']
}
export default function reducer(preState=initState, action){
  const {type,data} = action
  switch (type) {
    case 'add':
      return {todos:[data,...preState.todos]}
    case 'remove':
      return {todos: preState.todos.filter((n,i) => i !== data )}
    case 'removeAll':
      return {todos:[]}
    default:
      return preState;
  }
}