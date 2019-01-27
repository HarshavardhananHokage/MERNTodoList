import mongoose from 'mongoose';
import db_details from './connection';
import Todo from './TodoModel';

mongoose.connect(db_details, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected successfully");
    }
});

export function addTodo(todo, createdDate, isCompleted) {
    let newTodo = new Todo({
        todo: todo,
        timestamp: createdDate,
        isCompleted: isCompleted
    });

    newTodo.save((err) => {
        if (err) {
            console.log("Error inserting todo:")
            console.log(err);
        } else
            console.log("Inserted todo into db");
    });
}

export function getTodos() {
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log("Error getting list of todos:")
            console.log(err);
        } else {
            return todos;
        }
    });
}

export function getTodoByID(id) {
    Todo.find(id, (err, todo) => {
        if (err) {
            console.log("Error getting todo with id => " + id);
            console.log(err);
        } else {
            return todo;
        }
    })
}

export function updateTodo(id, isCompleted) {
    Todo.findByIdAndUpdate(id, { isCompleted: isCompleted }, (err) => {
        if (err) {
            console.log("Error updating todo with id => " + id);
            console.log(err);
        }
    });
}

export function deleteTodo(id) {
    Todo.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log("Error updating todo with id => " + id);
            console.log(err);
        }
    })
}