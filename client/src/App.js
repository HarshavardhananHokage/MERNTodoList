import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import SearchTodo from './SearchTodo';
import StateToggles from './StateToggles';
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
          <div>
            <fieldset id="container">
              <legend><strong>Todo List Controls</strong></legend>
              <StateToggles />
              <SearchTodo />
            </fieldset>
          </div>
          <br />
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

App.propTypes = {
  fetchTodos: PropTypes.func
}

export default connect(null, mapDispatchToProps)(App);
