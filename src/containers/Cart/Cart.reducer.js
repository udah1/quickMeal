import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART
} from './Cart.actions';

const initial_state = {
    items: []
}

const updateItems = (items) => {
    return items.map((item, index) => {
        return {...item, id: index}
    })
}
export default (state = initial_state, action) => {
    const items = state.items.slice();

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            items.push(action.item)
            return {
                ...state,
                items: updateItems(items)
            };
        case REMOVE_ITEM_FROM_CART:
            const filterItems = items.filter(item => item.id !== action.id)
            return {
                ...state,
                items: updateItems(filterItems)
            };
        default:
            return state
    }
}
