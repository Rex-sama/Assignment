const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  product_name: {
    type: String,
  },
  vat: {
    type: String,
  },
  quantity: {
    type: String,
  },
  net_price: {
    type: String,
  },
  gross_price: {
    type: String,
  },
});

module.exports = mongoose.model("Product", UserSchema);
