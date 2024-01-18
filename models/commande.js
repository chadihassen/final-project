const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commandeSchema = new schema({
  iduser:String,
  nameuser:String,
  namepro:String,
  imgpro:String,
  price:Number,
  qte:Number,
  date:String,
  status:String
});

const Commande = mongoose.model("Commande", commandeSchema);

module.exports = Commande;