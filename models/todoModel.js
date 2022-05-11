const products = require("../data/todoData.json");

function findAllTodos() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

module.exports = { findAllTodos };
