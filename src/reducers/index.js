import { combineReducers } from 'redux'

import board from '../containers/Board/Board.reducer'
import cube from '../containers/Cube/Cube.reducer'
import menu from '../containers/Menu/Menu.reducer'

const rootReducer = combineReducers({
  reducer : combineReducers({ //nesting reducers...
      board,
      cube,
      menu
  })
  //place other reducers and nested reducers here...
})

export default rootReducer

