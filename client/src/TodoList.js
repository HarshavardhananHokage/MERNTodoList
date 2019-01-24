import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Todo</th>
                    <th>Timestamp</th>
                    <th>Is Completed</th>
                    <th>Delete Todo</th>
                </tr>
                {
                    props.todos.map((todo) =>
                        <Todo key={todo.id} todo={todo}/>
                    )
                }
            </table>
        </div>
    )
}

export default TodoList;