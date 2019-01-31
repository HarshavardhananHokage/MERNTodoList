import * as api from '../api/api';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO_ID = 'GET_TODO_ID';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const IS_LOADING = 'IS_LOADING';

export function addTodo(todo) {
    return function(dispatch, getState) {
        dispatch({type: ADD_TODO, todo});
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
               return { id: todo._id, todo: todo.todo, timestamp: new Date(todo.timestamp), isCompleted: todo.isCompleted };
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
        dispatch({ type: UPDATE_TODO, id});
        return api.updateTodo(id, !isCompleted);
    }
}

export function deleteTodo(id) {
    return function(dispatch) {
        dispatch({ type: DELETE_TODO, id});
        return api.deleteTodo(id);
    }
}

