import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import PropTypes from 'prop-types';

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
                            <Todo key={todo.id} todo={todo} toggle={props.toggle}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.filterTodos,
        isLoading: state.isLoading,
        toggle: state.toggle
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    isLoading: PropTypes.bool,
    toggle: PropTypes.string
};

export default connect(mapStateToProps)(TodoList);