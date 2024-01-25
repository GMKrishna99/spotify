/**
 * @license MIT License
 * @copyright gmk 2024
 */
"use strict";
require("dotenv").config();

// the base address of the web api
const BASE_URL = process.env.BASE_URL;

// The base address of the spotify authentication token
const TOKEN_BASE_URL = process.env.AUTH_TOKEN;

// spotify client ID
const CLIENT_ID = process.env.CLIENT_ID;

// spotify client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// redirect uri for spotify authorization code flow
const REDIRECT_URI = process.env.REDIRECT_URI;

// scope of spotify
const SCOPE = process.env.SCOPE;

// Authentication state key
const STATE_KEY = "spotify_auth_state";

// Api requests queries
const MARKET = "US";
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

module.exports = {
  BASE_URL,
  TOKEN_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  SCOPE,
  STATE_KEY,
  MARKET,
  LOW_LIMIT,
  DEFAULT_LIMIT,
};
