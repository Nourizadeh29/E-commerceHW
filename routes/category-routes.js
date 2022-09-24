const express = require("express");
const categoryRouter = express.Router();
require("dotenv").config();
const sequelize = require("../db/connection");
const Category = require("../model/Category");

categoryRouter.get("/allcategory", async (req, res) => {
  const result = await Category.findAll();
  res.send(result);
});

categoryRouter.get("/categoryById", async (req, res) => {
  if (req.body.id != "") {
    const result = await Category.findByPk(req.body.id);
    res.send(result);
  } else {
    res.send({ msg: "category Id Required !" });
  }
});

categoryRouter.post("/addcategory", async (req, res) => {
  if (req.body.category_name != "") {
    const result = await Category.create({
      category_name: req.body.category_name,
    });
    res.send({ msg: "Successfully Added !" });
  } else {
    res.send({ msg: "category Name Required !" });
  }
});

categoryRouter.put("/updatecategory", async (req, res) => {
  if (req.body.category_name == "") {
    res.send({ msg: "category Name Required !" });
  } else if (req.body.id == "") {
    res.send({ msg: "category Id Required !" });
  } else {
    const result = await Category.update(
      {
        category_name: req.body.category_name,
      },
      { where: { id: req.body.id } }
    );
    res.send({ msg: "Successfully Updated !" });
  }
});

categoryRouter.delete("/deletecategory", async (req, res) => {
  if (req.body.id == "") {
    res.send({ msg: "category Id Required !" });
  } else {
    const result = await Category.destroy({ where: { id: req.body.id } });
    res.send({ msg: "Successfully Deleted !" });
  }
});

module.exports = categoryRouter;
