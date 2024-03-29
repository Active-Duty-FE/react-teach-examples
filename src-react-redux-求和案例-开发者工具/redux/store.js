import {applyMiddleware, createStore,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducer = combineReducers({count:countReducer,persons:personReducer})

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
