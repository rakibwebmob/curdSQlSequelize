const express =require("express");
const morgan =require("morgan");
const router =require("./routes/index");
// import morgan from "morgan";
// import router from "./routes/index";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", function(){router})

const  sequelize  =require( "./config/db");

async function main() {
    await sequelize.sync({ force: false });
    app.listen(4000);
    console.log("server on port 4000");
}
main()
module.exports =router;