const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./controller/user.controller");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use((err, req, res, next) => res.send(err.message));

module.exports = app;
