import {combineReducers} from 'redux'

import menu from '../containers/Menu/Menu.reducer'
import cart from '../containers/Cart/Cart.reducer'

const rootReducer = combineReducers({
  reducer : combineReducers({ //nesting reducers...
      menu,
      cart
  })
  //place other reducers and nested reducers here...
})

export default rootReducer

