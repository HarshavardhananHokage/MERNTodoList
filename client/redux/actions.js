export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO_ID = 'GET_TODO_ID';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function getTodos() {
    return {
        type: GET_TODOS
    }
}

export function getTodosByID(id) {
    return {
        type: GET_TODO_ID,
        id
    }
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        todo
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}