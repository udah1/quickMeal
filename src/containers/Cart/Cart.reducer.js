import {
    ADD_ITEM_TO_CART
} from './Cart.actions';

const initial_state = {
    items: []
}

export default (state = initial_state, action) => {
    const items = state.items.slice();

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            items.push(action.item)
            return {
                ...state,
                items
            };
        default:
            return state
    }
}
