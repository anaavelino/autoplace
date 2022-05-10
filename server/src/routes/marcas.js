module.exports = function (application) {
  application.get("/marcas", function (req, res) {
    application.src.controllers.marcas.listar(application, req, res);
  });
};
