import {
    TOGGLE_STATUS, UPDATE_STATUS
} from './Cube.actions';

const initial_state = {
    gameGrid: []
}

const updateGrid = (state, index, status) => {
    const {i, j} = index;
    const gameGrid = state.gameGrid.slice();
    if (!gameGrid[i]) {
        gameGrid[i] = [];
    }
    gameGrid[i][j] = status;
    return gameGrid;
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case TOGGLE_STATUS:
            const {i, j} = action.index;
            let status = state.gameGrid[i][j] !== undefined ? state.gameGrid[i][j] : 2;
            status = (status  + 1) % 3;
            let gameGrid = updateGrid(state, action.index, status);
            gameGrid[i][j] = status;

            return {
                ...state,
                gameGrid
            };
        case UPDATE_STATUS:
            gameGrid = updateGrid(state, action.index, action.status);
            return {
                ...state,
                gameGrid
            };
        default:
            return state
    }

}

