var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");
/* GET users listing. */
router.get("/", indexController.home);
router.get("/products", indexController.products);
router.get("/products/:id", indexController.product);
router.post("/products", indexController.add);
router.put("/products/:id", indexController.update);
router.delete("/products/:id", indexController.remove);
module.exports = router;
