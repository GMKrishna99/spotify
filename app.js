"use strict";

// node Modules

const cors = require("cors");
const cookieParser = require("cookie-parser");

// initial express app

const express = require("express");

const app = express();

// Login Page
app.get("/login", (req, res) => {
  res.send(`Login`);
});

// app listen

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
