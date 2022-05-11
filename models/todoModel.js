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

function reviseTodo(id, todoData) {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index] = { id, ...todoData };
    updateDB(todos);
    resolve(todos[index]);
  });
}

module.exports = { findAllTodos, findTodo, createTodo, reviseTodo };
