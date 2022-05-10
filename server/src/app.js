const express = require("express");
const consign = require("consign");
const cors = require("cors");
const app = require("./config/express")();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "*",
};

app.use(cors(corsOptions));

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

consign()
  .include("src/routes")
  .then("src/models")
  .then("src/controllers")
  .into(app);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Custom-Header"
  );
  next();
});

var http = require("http").createServer(app);

http.listen(8080, function () {
  console.log("SERVIDOR OUVINDO -- PORTA 8080");
});
