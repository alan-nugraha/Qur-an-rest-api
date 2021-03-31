const ayahs = require("../model/ayah");
const helper = require("../helper/response");

module.exports = {
  addAyahs: (req, res) => {
    let data = {
      name: req.body.name,
      englishName: req.body.englishName,
      numberOfAyahs: req.body.numberOfAyahs,
      revelationType: req.body.revelationType,
    };

    ayahs
      .addAyahs(data)
      .then((result) => {
        helper.response(res, "Success Input Data", data, 200);
      })
      .catch((err) => {
        helper.response(res, "Something Wrong", null, 401);
      });
  },
  getAyahs: (req, res) => {
    ayahs
      .getAyahs()
      .then((result) => {
        helper.response(res, "Success Get Ayahs", result, 200);
      })
      .catch((err) => {
        helper.response(res, "Failed Get Ayahs");
      });
  },
};
