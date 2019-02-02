import mongoose from 'mongoose';

let todoSchema = new mongoose.Schema({
    todo: String,
    timestamp: Date,
    isCompleted: Boolean,
    completedDate: Date
});

let Todo = mongoose.model('Todo', todoSchema);

export default Todo;