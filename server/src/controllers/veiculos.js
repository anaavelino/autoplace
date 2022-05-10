module.exports.listar = async (application, req, res) => {
  var model = new application.src.models.veiculos();

  await model
    .listar(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};

module.exports.detalhar = async (application, req, res) => {
  var model = new application.src.models.veiculos();

  await model
    .detalhar(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};
module.exports.inserir= async (application, req, res) => {
  var model = new application.src.models.veiculos();

  await model
    .inserir(req)
    .then((result) => {
      console.log(result)
      res.status(result.code).send(result);
    })
    .catch((err) => {
      console.log(err)
      res.status(err.code).send(err);
    });
};
module.exports.update = async (application, req, res) => {
  var model = new application.src.models.veiculos();

  await model
    .update(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};
module.exports.modificar= async (application, req, res) => {
  var model = new application.src.models.veiculos();

  await model
    .modificar(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};

module.exports.deletar = async (application, req, res) => {
  var model = new application.src.models.veiculos();

  await model
    .deletar(req)
    .then((result) => {
      res.status(result.code).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
};