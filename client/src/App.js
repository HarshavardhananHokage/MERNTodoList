import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import { getTodos } from './redux/actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>TodoList</h2>
          <TodoList />
        </div>
        <div>
          <h3>Add a new todo below</h3>
          <AddTodo />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(getTodos())
  }
}

export default connect(null, mapDispatchToProps)(App);
