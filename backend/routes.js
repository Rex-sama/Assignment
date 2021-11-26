const express = require("express");
const router = express.Router();
const Product = require("./models");

router.get("/", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/addProduct", async (req, res) => {
  const product = new Product({
    product_name: req.body.product_name,
    vat: req.body.vat,
    quantity: req.body.quantity,
    net_price: req.body.net_price,
    gross_price: req.body.gross_price,
    total_stock: req.body.total_stock,
    image: req.body.image,
  });

  try {
    const result = await product.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(erro);
  }
});

module.exports = router;
