import express from 'express'
import * as db from '../model/database';

const router = express.Router();

router.get('/todos', (req, res, next) => {

    res.setHeader('Content-Type', 'application/json');
    db.getTodos()
        .then((todos) => res.status(200).send(todos))
        .catch((err) => res.status(500).send(err));
});

router.get('/todo/:id', (req, res, next) => {
    let id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    db.getTodoByID(id)
        .then((todo) => res.status(200).send(todo))
        .catch((err) => res.status(500).send(err));
});

router.post('/todo', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    db.addTodo(req.body.todo, req.body.timestamp, req.body.isCompleted)
        .then((out) => res.status(200).send(out))
        .catch((err) => res.status(500).send(err));
});

router.delete('/todo/:id', (req, res, next) => {
    let id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    db.deleteTodo(id)
        .then((msg) => res.status(200).send(msg))
        .catch((err) => res.status(500).send(err));
});

router.put('/todo', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    db.updateTodo(req.body.id, req.body.isCompleted, req.body.completedDate)
        .then((out) => res.status(200).send(out))
        .catch((err) => res.status(500).send(err));
});

export default router;