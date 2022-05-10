const axios = require("axios");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

const dbConnection = axios.create({
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  baseURL: env.JSON_SERVER,
});

module.exports = dbConnection;
