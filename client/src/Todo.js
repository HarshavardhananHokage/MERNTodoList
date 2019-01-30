import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

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

function mapDispatchToProps(dispatch) {
    return {
        handleDelete: (id) => dispatch(actions.deleteTodo(id)),
        handleComplete: (id) => dispatch(actions.updateTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);