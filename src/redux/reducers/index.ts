import { combineReducers } from 'redux'

import countries from './countries'

const createRootReducer = () =>
  combineReducers({
    countries,
  })

export default createRootReducer
