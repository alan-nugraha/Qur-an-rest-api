const surah = require("../model/surah");
const helper = require("../helper/response");

module.exports = {
  addSurah: (req, res) => {
    let data = {
      name: req.body.name,
      englishName: req.body.englishName,
      numberOfAyahs: req.body.numberOfAyahs,
      revelationType: req.body.revelationType,
    };

    surah
      .addSurah(data)
      .then((result) => {
        helper.response(res, "Success Input Data", data, 200);
      })
      .catch((err) => {
        helper.response(res, "Something Wrong", null, 401);
      });
  },
  getSurah: (req, res) => {
    surah
      .getSurah()
      .then((result) => {
        helper.response(res, "Success Get Surah", result, 200);
      })
      .catch((err) => {
        helper.response(res, "Failed Get Surah");
      });
  },
};
