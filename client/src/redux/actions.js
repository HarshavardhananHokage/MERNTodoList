import * as api from '../api/api';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO_ID = 'GET_TODO_ID';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const IS_LOADING = 'IS_LOADING';
export const FIRE_SEARCH = 'FIRE_SEARCH';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export function addTodo(todo) {
    return function(dispatch, getState) {
        dispatch({type: ADD_TODO, todo});
        dispatch(updateFilter());
        return api.postTodo(todo).then((data) => {
            let { todos } = getState();
            let newTodos = todos.map((item) => item.id === todo.id ? Object.assign({}, todo, {id: data._id}) : item);
            dispatch({ type: GET_TODOS, todos: newTodos});
        })

    }
}

export function getTodos() {
   return function(dispatch) {
       dispatch({type: IS_LOADING});
       return api.getTodos().then((data) => {
           let todoList = data.map((todo) => {
               let completedDate = todo.completedDate === undefined ? undefined : new Date(todo.completedDate);
               return { id: todo._id, todo: todo.todo, timestamp: new Date(todo.timestamp), isCompleted: todo.isCompleted, completedDate: completedDate };
           });
           return todoList;
       }).then((todos) => { dispatch({ type: GET_TODOS, todos: todos})});
   }
}

export function getTodosByID(id) {
    return {
        type: GET_TODO_ID,
        id
    }
}

export function updateTodo(id, isCompleted) {
    return function(dispatch) {
        let compDate = new Date();
        dispatch({ type: UPDATE_TODO, todo: {id, compDate}});
        dispatch(updateFilter());
        return api.updateTodo(id, !isCompleted, compDate);
    }
}

export function deleteTodo(id) {
    return function(dispatch) {
        dispatch({ type: DELETE_TODO, id});
        dispatch(updateFilter());
        return api.deleteTodo(id);
    }
}

export function updateFilter() {
    return function(dispatch, getState) {
        let { searchTerm } = getState();
        dispatch(fireSearch(searchTerm));
    }
}

export function fireSearch(term) {
    return {type: FIRE_SEARCH, term};
}

