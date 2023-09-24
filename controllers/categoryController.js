const Category = require("../models/categoryModel");

exports.postCategory = (req, res) => {
  const category = new Category(req.body.name);
  category
    .saveCategory()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};
