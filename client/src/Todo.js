import React from 'react';

const Todo = ({todo, handleDelete, handleComplete}) => {
    return (
        <tr>
            <td className={todo.isCompleted ? "completed" : "pending"}>{todo.todo}</td>
            <td>{todo.timestamp.toLocaleString()}</td>
            <td><input type="checkbox" className="todoCheck" checked={todo.isCompleted} 
                onChange={() => handleComplete(todo.id)} /></td>
            <td><button onClick={() => handleDelete(todo.id)}>Delete</button></td>
        </tr>
    )
}

export default Todo;