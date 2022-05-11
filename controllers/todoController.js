const Model = require("../models/todoModel");
const { getBody } = require("../util");

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

// GET /api/todo/{id}
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

// POST /api/todo
async function addTodo(req, res) {
  try {
    const { id, title, isComplete, background, color } = await getBody(req);

    const todo = {
      id,
      title,
      isComplete,
      background,
      color,
    };

    const newTodo = await Model.createTodo(todo);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newTodo));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

// PUT /api/todo/{id}
async function updateTodo(req, res, id) {
  try {
    const todo = await Model.findTodo(id);

    if (todo) {
      const { title, isComplete, background, color } = await getBody(req);

      const todoData = {
        title: title || todo.title,
        isComplete: isComplete || todo.isComplete,
        background: background || todo.background,
        color: color || todo.background,
      };

      const newTodo = await Model.reviseTodo(id, todoData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTodo));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo Not Found" }));
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

// DELETE /api/todo/{id}
async function deleteTodo(req, res, id) {
  try {
    const todo = await Model.findTodo(id);

    if (todo) {
      await Model.removeTodo(id);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Todo <${id}> Deleted` }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo Not Found" }));
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

module.exports = { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
