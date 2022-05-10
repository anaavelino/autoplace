module.exports.listar = async (application, req, res) => {
    var model = new application.src.models.marcas();
  
    await model
      .listar(req)
      .then((result) => {
        res.status(result.code).send(result);
      })
      .catch((err) => {
        res.status(err.code).send(err);
      });
  };