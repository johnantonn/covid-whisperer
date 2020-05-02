require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors());
app.use("/api/", routes);

const port = process.env.PORT || 9000;
const host = process.env.HOST || "localhost";
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i += 1) cluster.fork();
  console.log(chalk.bold.cyan(`>>> Live at http://${host}:${port}`));
  cluster.on("exit", (worker) => {
    console.log(`Worker: ${worker.id} died. Trying to restart it...`);
    cluster.fork();
  });
} else {
  app.listen(port, host);
}

module.exports = app;
