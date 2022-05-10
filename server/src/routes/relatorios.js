module.exports = function (application) {
  application.get("/relatorios/novos", function (req, res) {
    application.src.controllers.relatorios.novos(application, req, res);
  });
  application.get("/relatorios/idade", function (req, res) {
    application.src.controllers.relatorios.idade(application, req, res);
  });
  application.get("/relatorios/vendidos", function (req, res) {
    application.src.controllers.relatorios.vendidos(application, req, res);
  });
};
