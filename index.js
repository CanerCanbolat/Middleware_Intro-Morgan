const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs");
  next();
});

const verifyPassword = (req, res, next) => {
  //Authenticate control doesnt like do this.Dont forget this is example
  const { password } = req.query;
  if (password === "chichkennugget") {
    next();
  }
  res.send("Sorry You need a Password !!");
};

app.get("/", (req, res) => {
  console.log(`Request Time: ${req.requestTime}`);
  res.send("HOME PAGE!!");
});

app.get("/dogs", (req, res) => {
  console.log(`Request Time: ${req.requestTime}`);

  res.send("WOOFF WOOFF!!!");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send(
    "MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone. "
  );
});

app.use((req, res) => {
  res.status(404).send("Not Found!!!");
});

app.listen("3000", (req, res) => {
  console.log("App is runnig on Localhost:3000");
});
