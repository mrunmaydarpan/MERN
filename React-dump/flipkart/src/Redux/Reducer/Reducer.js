import { combineReducers } from 'redux'

function counterReducer(state = 0, Action) {
    switch (Action.type) {
        case 'increment':
            return state + Action.payload;
        default:
            return state;
    }
}

 let rootreducer = combineReducers({ counterReducer })
 export default rootreducer