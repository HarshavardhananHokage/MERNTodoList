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

    let successMessage = '{"message": "Inserted successfully into DB"}';

    return new Promise((resolve, reject) => {
        newTodo.save((err, product) => {
            if (err) {
                console.log("Error inserting todo:")
                reject(err);
            } else
                resolve(product);
        });
    })
}

export function getTodos() {
    return new Promise(function (resolve, reject) {
        Todo.find({}, (err, todos) => {
            if (err) {
                console.log("Error getting list of todos:")
                console.log(err);
                reject(err);
            } else {
                //console.log(todos);
                resolve(todos);
            }
        });
    });
}

export function getTodoByID(id) {
    return new Promise((resolve, reject) => {
        Todo.findById(id, (err, todo) => {
            if (err) {
                console.log("Error getting todo with id => " + id);
                console.log(err);
                reject(err);
            } else {
                resolve(todo);
            }
        });
    })
}

export function updateTodo(id, isCompleted) {
    let successMessage = '{"message": "Updated successfully in DB"}';
    return new Promise((resolve, reject) => {
        Todo.findByIdAndUpdate(id, { isCompleted: isCompleted }, (err) => {
            if (err) {
                console.log("Error updating todo with id => " + id);
                reject(err);
            } else {
                resolve(successMessage);
            }
        });
    });
}

export function deleteTodo(id) {
    let successMessage = '{"message": "Deleted successfully from DB"}';

    return new Promise((resolve, reject) => {
        Todo.findByIdAndDelete(id, (err) => {
            if (err) {
                console.log("Error updating todo with id => " + id);
                reject(err);
            } else {
                resolve(successMessage);
            }
        })
    });
}