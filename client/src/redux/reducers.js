import * as actions from './actions';

const initialState = {
    todos: [],
    isLoading: false,
    searchTerm: "",
    filterTodos: []
}

function rootReducer(state = initialState, action) {

    if(action.type === actions.GET_TODOS) {
        return Object.assign({}, state, { todos: action.todos, filterTodos: action.todos, isLoading: false });
    } else if (action.type === actions.UPDATE_TODO) {
        let newTodos = state.todos.map((todo) => {
            if (todo.id === action.todo.id) {
                 return Object.assign({}, todo, { isCompleted: !todo.isCompleted, completedDate: action.todo.compDate });
            }
            return todo;
        });
        return Object.assign({}, state, { todos: newTodos });
    } else if (action.type === actions.DELETE_TODO) {
        let newTodos = state.todos.filter((todo) => todo.id !== action.id);
        return Object.assign({}, state, { todos: newTodos });
    } else if (action.type === actions.ADD_TODO) {
        let newTodos = [...state.todos, action.todo];
        return Object.assign({}, state, { todos: newTodos });
    } else if (action.type === actions.IS_LOADING) {
        return Object.assign({}, state, {isLoading: true});
    } else if (action.type === actions.FIRE_SEARCH) {
        let searchTerm = action.term;
        let filteredTodos = state.todos.filter((item) => item.todo.toLowerCase().includes(searchTerm));
        return Object.assign({}, state, {filterTodos: filteredTodos, searchTerm});
    }
    else {
        return state;
    }
}

export default rootReducer;