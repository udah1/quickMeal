import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART
} from './Cart.actions';

const initial_state = {
    items: []
}

const updateCart = (items) => {
    let totalPrice = 0;
    const newItems = items.map((item, index) => {
        totalPrice += item.price;
        return {...item, id: index}
    })

    return {
        items: newItems,
        totalPrice
    }
}
export default (state = initial_state, action) => {
    const items = state.items.slice();

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            items.push(action.item)
            return {
                ...state,
                ...updateCart(items)
            };
        case REMOVE_ITEM_FROM_CART:
            const filterItems = items.filter(item => item.id !== action.id)
            return {
                ...state,
                ...updateCart(filterItems)
            };
        default:
            return state
    }
}
