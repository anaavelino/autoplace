module.exports = function (application) {

  application.get("/veiculos", function (req, res) {
    application.src.controllers.veiculos.listar(application, req, res);
  });

  application.get("/veiculos/:id", function (req, res) {
    application.src.controllers.veiculos.detalhar(application, req, res);
  });

  application.post("/veiculos", function (req, res) {
    application.src.controllers.veiculos.inserir(application, req, res);
  });

  application.put("/veiculos/:id", function (req, res) {
    application.src.controllers.veiculos.update(application, req, res);
  });

  application.patch("/veiculos/:id", function (req, res) {
    application.src.controllers.veiculos.modificar(application, req, res);
  });

  application.delete("/veiculos/:id", function (req, res) {
    application.src.controllers.veiculos.deletar(application, req, res);
  });
};
