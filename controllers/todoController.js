const Model = require("../models/todoModel");

async function getTodos(req, res) {
  try {
    const products = await Model.findAllTodos();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Internal Server Error" }));
  }
}

module.exports = { getTodos };
