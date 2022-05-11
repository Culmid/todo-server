const Model = require("../models/todoModel");

// GET /api/todos
async function getTodos(req, res) {
  try {
    const todos = await Model.findAllTodos();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

// GET /api/todo/id
async function getTodo(req, res, id) {
  try {
    const todo = await Model.findTodo(id);

    if (todo) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo Not Found" }));
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

module.exports = { getTodos, getTodo };
