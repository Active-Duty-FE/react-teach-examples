const inintStata = {count:0}

export default function todoReducer(preState=inintStata, action) {
  const { type } = action
  switch (type) {
    case 'incre':
      return {count: preState.count + 1}
    case 'decre':
      return {count: preState.count - 1}
    default:
      return preState
  }
}