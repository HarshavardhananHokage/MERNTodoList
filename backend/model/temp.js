import * as db from './database';

db.addTodo("buy milk", new Date(), false);
db.getTodos();
//db.getTodoByID('5c4d2ee84ddfae225848494b');
// db.updateTodo('5c4d2ee84ddfae225848494b', true);
//db.deleteTodo('5c4d2ee84ddfae225848494b');