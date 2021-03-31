const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const surah = require("./src/route/surah");
const logger = require("morgan");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(logger("dev"));
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.listen(port, () => {
  console.log("Server On Using Port", port);
});

app.use("/api/v1", surah);

module.exports = app;
