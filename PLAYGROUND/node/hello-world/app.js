const express = require("express");
const app = express();
const port = 3000;

var birds = require("./birds");

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
app.use("/birdsA", birds);

app.get("/", (req, res) => {
  res.send("hello get");
});
app.get("/1", (req, res) => {
  res.send("1");
});
app.get("/2", (req, res) => {
  res.send("2");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("hello post");
});
