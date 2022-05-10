const dbConnection = require("../config/dbConnection");

function veiculos() {}

veiculos.prototype.listar = async (req) => {
  let { marca, ano, cor } = req.query;

  let response = {};
  return new Promise((resolve, reject) => {
    dbConnection
      .get(
        `/veiculos${marca || ano || cor ? "?" : ""}${
          marca ? `marca_id=${marca}` : ""
        }${ano ? `ano=${ano}` : ""}${cor ? `descricao_like=${cor}` : ""}`
      )
      .then((res) => {
        response.code = 200;
        response.data = res.data;
        resolve(response);
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 404) {
          response.code = 200;
          response.data = [];
          resolve(response);
        } else {
          response.code = 500;
          response.error = err.stack;
          reject(response);
        }
      });
  });
};

veiculos.prototype.detalhar = async (req) => {
  let id = req.params.id;

  let response = {};
  return new Promise((resolve, reject) => {
    dbConnection
      .get(`/veiculos/${id}`)
      .then((res) => {
        response.code = 200;
        response.data = res.data;
        resolve(response);
      })
      .catch((err) => {
        console.log(err);

        if (err.response.status === 404) {
          response.code = 200;
          response.data = [];
          resolve(response);
        } else {
          response.code = 500;
          response.error = err.stack;
          reject(response);
        }
      });
  });
};

veiculos.prototype.inserir = async (req) => {
  let response = {};
  return new Promise((resolve, reject) => {
    let {
      marca_id,
      veiculo,
      marca,
      ano,
      descricao,
      vendido,
      created,
      updated,
    } = req.body;

    let check = {
      marca_id,
      veiculo,
      marca,
      ano,
      descricao,
      vendido,
      created,
      updated,
    };

    let error = false;
    let values = Object.values(check);
    console.log(req.body);
    values.forEach((item) => {
      if (item === null || item === undefined) {
        error = true;
      }
    });

    if (error) {
      response.code = 500;
      response.error = "Faltam Propriedades";
      reject(response);
    } else {
      dbConnection
        .post(`/veiculos`, req.body)
        .then((res) => {
          response.code = 200;
          response.data = true;
          resolve(response);
        })
        .catch((err) => {
         
            response.code = 500;
            response.error = err.stack;
            reject(response);
          
        });
    }
  });
};
veiculos.prototype.update = async (req) => {
  let id = req.params.id;

  let response = {};
  return new Promise((resolve, reject) => {
    let {
      marca_id,
      veiculo,
      marca,
      ano,
      descricao,
      vendido,
      created,
      updated,
    } = req.body;

    let check = {
      marca_id,
      veiculo,
      marca,
      ano,
      descricao,
      vendido,
      created,
      updated,
    };

    let error = false;
    let values = Object.values(check);
    values.forEach((item) => {
      if (item === "" || item === null || item === undefined) {
        error = true;
      }
    });

    if (error) {
      response.code = 500;
      response.error = "Faltam Propriedades";
      reject(response);
    } else {
      dbConnection
        .put(`/veiculos/${id}`, req.body)
        .then((res) => {
          response.code = 200;
          response.data = true;
          resolve(response);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            response.code = 200;
            response.data = false;
            resolve(response);
          } else {
            response.code = 500;
            response.error = err.stack;
            reject(response);
          }
        });
    }
  });
};
veiculos.prototype.modificar = async (req) => {
  let id = req.params.id;
  let response = {};
  return new Promise((resolve, reject) => {
    dbConnection
      .patch(`/veiculos/${id}`, req.body)
      .then((res) => {
        response.code = 200;
        response.data = true;
        resolve(response);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          response.code = 200;
          response.data = false;
          resolve(response);
        } else {
          response.code = 500;
          response.error = err.stack;
          reject(response);
        }
      });
  });
};

veiculos.prototype.deletar = async (req) => {
  let id = req.params.id;

  let response = {};
  return new Promise((resolve, reject) => {
    dbConnection
      .delete(`/veiculos/${id}`)
      .then((res) => {
        response.code = 200;
        response.data = true;
        resolve(response);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          response.code = 200;
          response.data = false;
          resolve(response);
        } else {
          response.code = 500;
          response.error = err.stack;
          reject(response);
        }
      });
  });
};

module.exports = function () {
  return veiculos;
};
