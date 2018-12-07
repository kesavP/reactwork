import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import treeFilter from './treeFilter';
import buttonFilter from './buttonFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  treeFilter,
  buttonFilter
})

export default rootReducer
