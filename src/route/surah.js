const express = require("express");
const route = express.Router();
const surah = require("../controller/surah");

route.post("/add", surah.addSurah);
route.get("/get", surah.getSurah);

module.exports = route;
