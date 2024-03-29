const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("HOME PAGE!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOFF WOOFF!!!");
});

app.listen("3000", (req, res) => {
  console.log("App is runnig on Localhost:3000");
});
