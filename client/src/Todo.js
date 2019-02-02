import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

const Todo = ({todo, handleDelete, handleComplete}) => {
    return (
        <tr>
            <td className={todo.isCompleted ? "completed" : "pending"}>{todo.todo}</td>
            <td>{todo.timestamp.toLocaleString()}</td>
            <td><input type="checkbox" className="todoCheck" checked={todo.isCompleted} 
                onChange={() => handleComplete(todo.id, todo.isCompleted)} /></td>
            <td>{ todo.completedDate !== undefined ? todo.completedDate.toLocaleString() : "In Progress"}</td>
            <td><button onClick={() => handleDelete(todo.id)}>Delete</button></td>
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleDelete: (id) => dispatch(actions.deleteTodo(id)),
        handleComplete: (id, isCompleted) => dispatch(actions.updateTodo(id, isCompleted))
    }
}

export default connect(null, mapDispatchToProps)(Todo);