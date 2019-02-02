import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv from 'uuid';
import { addTodo } from './redux/actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let newTodo = { id: uuidv(), todo: this.state.todo, timestamp: new Date(), isCompleted: false, completedDate: undefined };
        this.props.submitTodo(newTodo);
        this.setState({
            todo: ""
        });
    }

    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo"></label>
                <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange} /><br />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);