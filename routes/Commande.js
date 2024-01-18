const express = require("express");
const commande = require("../models/commande");
const commandeRouter = express.Router();

//add commande
commandeRouter.post("/add", async (req, res) => {
  try {
    let newcommande = new commande(req.body);
    let result = await newcommande.save();
    res.send({ commande: result, msg: "commande is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all commandes
commandeRouter.get("/", async (req, res) => {
  try {
    let result = await commande.find();
    res.send({ commandes: result, msg: "all commandes" });
  } catch (error) {
    console.log(error);
  }
});

//get commande by id
commandeRouter.get("/:id", async (req, res) => {
  try {
    let result = await commande.findById(req.params.id);
    res.send({ commande: result, msg: " commande" });
  } catch (error) {
    console.log(error);
  }
});

commandeRouter.delete("/:id", async (req, res) => {
  try {
    let result = await commande.findByIdAndDelete(req.params.id);
    res.send({ msg: "commande is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update commande
commandeRouter.put("/:id", async (req, res) => {
  try {
    let result = await commande.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ commande: "result", msg: "commande is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = commandeRouter;