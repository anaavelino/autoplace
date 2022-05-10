const dbConnection = require("../config/dbConnection");

function marcas() {}

marcas.prototype.listar = async (req) => {
  let response = {};

  return new Promise((resolve, reject) => {
    dbConnection
      .get("/marcas")
      .then((res) => {
        response.code = 200;
        response.data = res.data;
        resolve(response);
      })
      .catch((err) => {
        response.code = 500;
        response.error = err.stack;
        reject(response);
      });
  });
};

module.exports = function () {
  return marcas;
};
