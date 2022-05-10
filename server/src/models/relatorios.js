const dbConnection = require("../config/dbConnection");

function relatorios() {}

relatorios.prototype.novos = async (req) => {
  let response = {};

  return new Promise((resolve, reject) => {
    dbConnection
      .get(`/veiculos?_page=1&_limit=20`)
      .then((res) => {
        response.code = 200;
        response.data = res.data.sort(
          (a, b) => new Date(b.created) - new Date(a.created)
        );

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

relatorios.prototype.vendidos = async (req) => {
  let response = {};

  return new Promise((resolve, reject) => {
    dbConnection
      .get(`/veiculos`)
      .then((res) => {
        let vendas = [
          { label: "Sim", value: 0 },
          { label: "Não", value: 0 },
        ];

        res.data.map((item) => {
          if (item.vendido) {
            vendas[0].value++;
          } else {
            vendas[1].value++;
          }
        });

        response.code = 200;
        response.data = vendas;

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
relatorios.prototype.idade = async (req) => {
  let response = {};

  return new Promise((resolve, reject) => {
    dbConnection
      .get(`/veiculos`)
      .then((res) => {
        let contagem = [];
        res.data.forEach((item) => {
          let decada = new Date(item.ano).getFullYear();
          contagem.push(decada.toString().substring(0, 3) + "0");
        });

        let data = [];
        contagem.forEach((item) => {
          let found = false;
          let posicao = 0;
          data.forEach((obj, index) => {
            if (obj.label === item) {
              found = true;
              posicao = index;
            }
          });
          if (found) {
            data[posicao].value++;
          } else {
            data.push({ label: item, value: 1 });
          }
        });

        response.code = 200;
        response.data = data;
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

module.exports = function () {
  return relatorios;
};
