const fs = require("fs");

function getBody(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const buffer = [];

      for await (const chunk of req) {
        buffer.push(chunk);
      }

      const body = JSON.parse(Buffer.concat(buffer).toString());

      resolve(body);
    } catch (error) {
      reject(error);
    }
  });
}

function updateDB(todos) {
  fs.writeFileSync(
    "./data/todoData.json",
    JSON.stringify(todos),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}

module.exports = { getBody, updateDB };
