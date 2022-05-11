const http = require("http");
const Controller = require("./controllers/todoController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/todos" && req.method === "GET") {
    Controller.getTodos(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server Open, Port: ${PORT}`);
});
