import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        props.isLoading ? <p>Loading...</p> :
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Todo</th>
                        <th>Timestamp</th>
                        <th>Is Completed</th>
                        <th>Completed Date</th>
                        <th>Delete Todo</th>
                    </tr>
                    {
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