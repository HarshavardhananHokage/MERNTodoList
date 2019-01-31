import React from 'react';
import { connect } from 'react-redux';
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
                        props.isLoading ? <p>Loading...</p> :
                        props.todos.map((todo) =>
                            <Todo key={todo.id} todo={todo} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(TodoList);