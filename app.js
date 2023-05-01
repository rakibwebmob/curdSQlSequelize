const express = require("express");
const morgan = require("morgan");
const router = require("./src/routes/index");
// import morgan from "morgan";
// import router from "./routes/index";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", router);

const sequelize = require("./src/config/db");

async function main() {
  await sequelize.sync({ force: false });
  app.listen(4000);
  console.log("server on port 4000");
}
main();
module.exports = router;
