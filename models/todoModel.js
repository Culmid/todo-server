const todos = require("../data/todoData.json");
const { updateDB } = require("../util");

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

function createTodo(todo) {
  return new Promise((resolve, reject) => {
    todos.push(todo);
    updateDB(todos);
    resolve(todo);
  });
}

module.exports = { findAllTodos, findTodo, createTodo };
