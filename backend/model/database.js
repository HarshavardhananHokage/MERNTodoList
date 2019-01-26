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

let newTodo = new Todo({
    todo: "Drink Booze",
    timestamp: new Date(),
    isCompleted: false
})
newTodo.save((err) => {
    if (err)
        console.log(err);
    else {
        Todo.find({ "todo": "Drink Booze" }, (err, todo) => {
            if (err)
                console.log(err);
            else
                console.log(todo);
        })
    }
    console.log("Inserted");
});

