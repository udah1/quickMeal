import { combineReducers } from 'redux'

import board from '../containers/Board/Board.reducer'
import cube from '../containers/Cube/Cube.reducer'
import main from '../containers/Main/Main.reducer'

const rootReducer = combineReducers({
  reducer : combineReducers({ //nesting reducers...
      board,
      cube,
      main
  })
  //place other reducers and nested reducers here...
})

export default rootReducer

