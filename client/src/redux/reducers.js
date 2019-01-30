import * as actions from './actions';

const initialState = {
    todos: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_TODOS:
            return Object.assign({}, state, { todos: action.todos});
        default:
            return state;
    }
}

export default rootReducer;