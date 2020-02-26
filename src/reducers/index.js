import {combineReducers} from 'redux'

import board from '../containers/Board/Board.reducer'
import cube from '../containers/Cube/Cube.reducer'
import menu from '../containers/Menu/Menu.reducer'
import cart from '../containers/Cart/Cart.reducer'

const rootReducer = combineReducers({
  reducer : combineReducers({ //nesting reducers...
      board,
      cube,
      menu,
      cart
  })
  //place other reducers and nested reducers here...
})

export default rootReducer

