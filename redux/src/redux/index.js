import { combineReducers, createStore } from 'redux'

import cats from './reducers/cats'
import owner from './reducers/owner'

const rootReducer = combineReducers({
  cats,
  owner,
})

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store