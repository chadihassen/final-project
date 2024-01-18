const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
   imgpro:String,
   namepro:String,
   price:Number,
   taille:String,
   category:String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;