const connection = require("../config/db");

module.exports = {
  addAyahs: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO surah SET ?`, data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getAyahs: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM surah`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
};
