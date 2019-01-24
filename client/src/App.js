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
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>TodoList</h2>
          <TodoList todos={this.state.todos} />
        </div>
        <div>
          <h2>This is a div for adding todos</h2>
          <AddTodo />
        </div>
      </div>
    );
  }
}

export default App;
