"use strict";

// node Modules

const cors = require("cors");
const cookieParser = require("cookie-parser");

// initial express app

const express = require("express");
const app = express();

// EJS Settings
app.set("view engine", "ejs");

// Setting static directory
app.use(express.static(`${__dirname}/public`));

// Enable cors & cookieParser
app.use(cors()).use(cookieParser());

// Login Page
app.get("/login", (req, res) => {
  res.send(`Login`);
});

// app listen

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
