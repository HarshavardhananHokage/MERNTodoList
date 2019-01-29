import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import * as api from './api/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  componentDidMount() {
    api.getTodos().then((data) => this.updateTodos(data));
  }

  updateTodos(data) {
    let todosList = data.map((todo) => {
      return { id: todo._id, todo: todo.todo, timestamp: new Date(todo.timestamp), isCompleted: todo.isCompleted };
    });

    this.setState({
      todos: todosList
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = this.state.todos.length + 1;
    let newTodo = { id: id, todo: this.state.todo, timestamp: new Date(), isCompleted: false };
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos,
      todo: ""
    });

    api.postTodo(newTodo).then((data) => {
      let newTodos = this.state.todos.map((todo) => todo.id === id ? Object.assign({}, newTodo, {id: data._id}) : todo);
      this.setState({
        todos: newTodos
      });
    });
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  handleDelete(id) {
    let newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos: newTodos
    });

    api.deleteTodo(id);
  }

  handleComplete(id) {
    let todo = {};
    let updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        todo = Object.assign({}, item, { isCompleted: !item.isCompleted });
        return todo;
      }
      return item;
    });

    this.setState({
      todos: updatedTodos
    });

    api.updateTodo(todo);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>TodoList</h2>
          <TodoList todos={this.state.todos} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
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
