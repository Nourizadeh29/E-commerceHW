const express = require("express");
const productRouter = express.Router();
require("dotenv").config();
const sequelize = require("../db/connection");
const Product = require("../model/Product");
const Category = require("../model/Category");
const ProductTag = require("../model/ProductTag");
const Tag = require("../model/Tag");

productRouter.get("/allproducts", async (req, res) => {
  const result = await Product.findAll({
    include: [
      {
        model: Category,
        key: Category.category_id,
        attributes: ["category_name"],
      },
    ],
  });
  res.send(result);
});

productRouter.get("/productsById", async (req, res) => {
  if (req.body.id != "") {
    const result = await Product.findOne({
      where: { id: req.body.id },
      include: [
        {
          model: Category,
          key: Category.category_id,
          attributes: ["category_name"],
        },
      ],
    });
    res.send(result);
  } else {
    res.send({ msg: "tag Id Required !" });
  }
});

productRouter.post("/addproducts", async (req, res) => {
  if (req.body.product_name == "") {
    res.send({ msg: "product_name Required !" });
  } else if (req.body.price == "") {
    res.send({ msg: "price Required !" });
  } else if (req.body.stock == "") {
    res.send({ msg: "stock Required !" });
  } else if (req.body.category_id == "") {
    res.send({ msg: "category_id  Required !" });
  } else {
    const result = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
    });
    res.send({ msg: "Successfully Added !" });
  }
});

productRouter.put("/updateproducts", async (req, res) => {
  if (req.body.product_name == "") {
    res.send({ msg: "product_name Required !" });
  } else if (req.body.price == "") {
    res.send({ msg: "price Required !" });
  } else if (req.body.stock == "") {
    res.send({ msg: "stock Required !" });
  } else if (req.body.category_id == "") {
    res.send({ msg: "category_id  Required !" });
  } else if (req.body.product_id == "") {
    res.send({ msg: "Product Id  Required !" });
  } else {
    const result = await Product.update(
      {
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id,
      },
      {
        where: { id: req.body.product_id },
      }
    );
    res.send({ msg: "Successfully Updated !" });
  }
});

productRouter.delete("/deleteproducts", async (req, res) => {
  if (req.body.id == "") {
    res.send({ msg: "Product Id Required !" });
  } else {
    const result = await Product.destroy({ where: { id: req.body.id } });
    res.send({ msg: "Successfully Deleted !" });
  }
});

productRouter.post("/addproducttags", async (req, res) => {
  if (req.body.product_id == "") {
    res.send({ msg: "product_id Required !" });
  } else if (req.body.tag_id == "") {
    res.send({ msg: "tag id Required !" });
  } else {
    const result = await ProductTag.create({
      product_id: req.body.product_id,
      tag_id: req.body.tag_id,
    });
    res.send({ msg: "Successfully Added !" });
  }
});

productRouter.get("/allproductstags", async (req, res) => {
  const result = await ProductTag.findAll({
    include: [
      {
        model: Product,
        key: Product.product_id,
        attributes: ["product_name"],
      },
      {
        model: Tag,
        key: Tag.tg_id,
        attributes: ["tag_name"],
      },
    ],
  });
  res.send(result);
});

module.exports = productRouter;
