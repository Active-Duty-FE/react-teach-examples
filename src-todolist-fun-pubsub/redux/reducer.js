const initState = []
export default function reducer(preState = initState, action) {
  switch (action.type) {
    case 'add':
      return [...preState,action.data]
    default:
      break;
  }
}