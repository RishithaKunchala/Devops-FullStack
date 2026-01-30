const http = require("http");

http.createServer((req, res) => {

  if (req.url === "/add") {
    res.end("Addition: " + (10 + 5));
  }
  else if (req.url === "/sub") {
    res.end("Subtraction: " + (10 - 5));
  }
  else if (req.url === "/mul") {
    res.end("Multiplication: " + (10 * 5));
  }
  else if (req.url === "/div") {
    res.end("Division: " + (10 / 5));
  }
  else {
    res.end("Invalid Operation");
  }

}).listen(3000);

console.log("Math server running on port 3000");
