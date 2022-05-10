module.exports.novos = async (application, req, res) => {
  var model = new application.src.models.relatorios();

  await model
    .novos(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};
module.exports.idade = async (application, req, res) => {
  var model = new application.src.models.relatorios();

  await model
    .idade(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};
module.exports.vendidos = async (application, req, res) => {
  var model = new application.src.models.relatorios();

  await model
    .vendidos(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};