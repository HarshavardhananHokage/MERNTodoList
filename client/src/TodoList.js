import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Todo</th>
                        <th>Timestamp</th>
                        <th>Is Completed</th>
                        <th>Delete Todo</th>
                    </tr>
                    {
                        props.todos.map((todo) =>
                            <Todo key={todo.id} todo={todo} handleDelete={props.handleDelete} 
                                handleComplete={props.handleComplete}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;