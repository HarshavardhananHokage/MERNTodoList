import React from 'react';

const Todo = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.todo}</td>
            <td>{todo.timestamp.toLocaleString()}</td>
            <td>{todo.isCompleted ? "Completed" : "Pending"}</td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default Todo;