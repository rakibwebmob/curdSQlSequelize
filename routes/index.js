
var express = require("express");
const routes = express.Router();

const users = require("./users");
routes.use("/", users.router);
module.exports = {
  module: {
    users,
  },
  routes,
};