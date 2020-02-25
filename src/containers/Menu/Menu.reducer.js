import {
    CHANGE_ACTIVITY
} from './Menu.actions';

const initial_state = {
    activity: 'play'
}

export default (state = initial_state, action) => {

    switch (action.type) {
        case CHANGE_ACTIVITY:
            return {
                ...state,
                activity: action.activity
            };
        default:
            return state
    }
}

