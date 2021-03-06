const http = require("http");
const Controller = require("./controllers/todoController");

const server = http.createServer((req, res) => {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token"
  );

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
  } else if (req.url === "/api/todos" && req.method === "GET") {
    Controller.getTodos(req, res);
  } else if (req.url.match(/\/api\/todo\/([0-9]+)/) && req.method === "GET") {
    const id = parseInt(req.url.split("/")[3]);
    Controller.getTodo(req, res, id);
  } else if (req.url === "/api/todo" && req.method === "POST") {
    Controller.addTodo(req, res);
  } else if (req.url.match(/\/api\/todo\/([0-9]+)/) && req.method === "PUT") {
    const id = parseInt(req.url.split("/")[3]);
    Controller.updateTodo(req, res, id);
  } else if (
    req.url.match(/\/api\/todo\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = parseInt(req.url.split("/")[3]);
    Controller.deleteTodo(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

require("dotenv").config();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server Open, Port: ${PORT}`);
});
