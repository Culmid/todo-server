const todos = require("../data/todoData.json");

function findAllTodos() {
  return new Promise((resolve, reject) => {
    resolve(todos);
  });
}

function findTodo(id) {
  return new Promise((resolve, reject) => {
    const todo = todos.find((todo) => todo.id === id);
    resolve(todo);
  });
}

module.exports = { findAllTodos, findTodo };
