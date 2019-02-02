import axios from 'axios';

const API_BASE_PATH = "http://localhost:3001/api";
const PATH_ALL_TODOS = "/todos";
const PATH_TODO = "/todo";

export function getTodos() {
    const GET_ALL_TODOS = `${API_BASE_PATH}${PATH_ALL_TODOS}`;
    return axios.get(GET_ALL_TODOS)
        .then(result => result.data)
        .catch(err => err.data);
}

export function getTodo(id) {
    const GET_TODO = `${API_BASE_PATH}${PATH_TODO}/${id}`;
    return axios.get(GET_TODO)
        .then(result => result.data)
        .catch(err => err.data);
}

export function updateTodo(id, isCompleted, completedDate) {
    const PUT_TODO = `${API_BASE_PATH}${PATH_TODO}`;
    console.log(`${id} ==> ${isCompleted}`);
    return axios.put(PUT_TODO, { id: id, isCompleted: isCompleted, completedDate: completedDate})
        .then(result => result.data)
        .catch(err => err.data);
}

export function deleteTodo(id) {
    const DELETE_TODO = `${API_BASE_PATH}${PATH_TODO}/${id}`;
    return axios.delete(DELETE_TODO)
        .then(result => result.data)
        .catch(err => err.data);
}

export function postTodo(todo) {
    const POST_TODO = `${API_BASE_PATH}${PATH_TODO}`;
    return axios.post(POST_TODO, { todo: todo.todo, timestamp: todo.timestamp, isCompleted: todo.isCompleted })
        .then(result => result.data)
        .catch(err => err.data);
}