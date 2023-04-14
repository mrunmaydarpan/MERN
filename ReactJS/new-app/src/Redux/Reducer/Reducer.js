import { combineReducers } from 'redux'

function counterReducer(state = 0, Action) {
    switch (Action.type) {
        case 'increment':
            return state + Action.payload;
        default:
            return state;
    }
}

let AddToCartReducer = (state = [], Action) => {
    switch (Action.type) {
        case 'AddToCart':
            return [...state, Action.payload];
        case 'RemoveFromCart':
            return state.filter((data) => data.id !== Action.payload.id)
        default:
            return state;
    }
}

let rootreducer = combineReducers({ counterReducer, AddToCartReducer })
export default rootreducer