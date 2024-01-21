/**
 * @license MIT License
 * @copyright gmk 2024
 */

"use strict";

// node Modules

const cors = require("cors");
const cookieParser = require("cookie-parser");

// custom modules
const login = require("./src/routes/login.route");

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
app.use("/login", login);

// app listen

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
