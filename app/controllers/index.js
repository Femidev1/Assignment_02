let procModel = require("../models/product");

module.exports.home = function (req, res, next) {
  res.json({
    success: true,
    message: "Welcome to DressStore Application",
  });
};

module.exports.products = async function (req, res, next) {
  let products = await procModel.find();
  res.json(products);
};

module.exports.product = async function (req, res, next) {
  let id = req.params.id;
  let product = await procModel.findById(id);
  res.json(product);
};

module.exports.add = async function (req, res, next) {
  let data = await procModel.create(req.body);
  res.json(data);
};

module.exports.update = async function (req, res, next) {
  let id = req.params.id;
  let product = new procModel(req.body);
  product._id = id;
  let data = await procModel.findByIdAndUpdate(id, product);
  res.json(data);
};

module.exports.remove = async function (req, res, next) {
  let id = req.params.id;
  let data = await procModel.findByIdAndDelete(id);
  res.json(data);
};
