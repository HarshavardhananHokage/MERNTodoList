export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO_ID = 'GET_TODO_ID';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const temp_todos = [
    { id: 1, todo: "Buy Milk", timestamp: new Date(), isCompleted: false },
    { id: 2, todo: "Walk Dog", timestamp: new Date(), isCompleted: true },
    { id: 3, todo: "Clean Room", timestamp: new Date(), isCompleted: false },
]

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function getTodos() {
    return {
        type: GET_TODOS,
        todos: temp_todos
    }
}

export function getTodosByID(id) {
    return {
        type: GET_TODO_ID,
        id
    }
}

export function updateTodo(id) {
    return {
        type: UPDATE_TODO,
        id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}

