const {Router} = require("express");
const controleFuncionarios = require("./app/controller");
const router = Router();


router.get("/funcionarios", controleFuncionarios.index);
router.get("/funcionarios/:id", controleFuncionarios.show);
router.post("/funcionarios", controleFuncionarios.add);
router.delete("/funcionarios/:id", controleFuncionarios.delete);

module.exports = router;