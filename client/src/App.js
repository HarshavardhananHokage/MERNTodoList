import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, todo: "Buy Milk", timestamp: new Date(), isCompleted: false},
        {id: 2, todo: "Take dog for walk", timestamp: new Date(), isCompleted: false},
        {id: 3, todo: "Clean Room", timestamp: new Date(), isCompleted: false},
      ],
      todo: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = this.state.todos.length + 1;
    let todos = [...this.state.todos, {id: id, todo: this.state.todo, timestamp: new Date(), isCompleted: false}];
    this.setState({
      todos: todos,
      todo: ""
    })
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>TodoList</h2>
          <TodoList todos={this.state.todos} />
        </div>
        <div>
          <h3>Add a new todo below</h3>
          <AddTodo currTodo={this.state.todo} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
