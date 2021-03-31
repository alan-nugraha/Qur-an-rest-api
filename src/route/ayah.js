const express = require("express");
const route = express.Router();
const ayahs = require("../controller/ayah");

route.post("/add", ayahs.addAyahs);
route.get("/get", ayahs.getAyahs);

module.exports = route;
