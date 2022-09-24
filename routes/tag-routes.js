const express = require("express");
const tagRouter = express.Router();
require("dotenv").config();
const sequelize = require("../db/connection");
const Tag = require("../model/Tag");

tagRouter.get("/alltags", async (req, res) => {
  const result = await Tag.findAll();
  res.send(result);
});

tagRouter.get("/tagsById", async (req, res) => {
  if (req.body.id != "") {
    const result = await Tag.findByPk(req.body.id);
    res.send(result);
  } else {
    res.send({ msg: "tag Id Required !" });
  }
});

tagRouter.post("/addtag", async (req, res) => {
  if (req.body.tag_name != "") {
    const result = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.send({ msg: "Successfully Added !" });
  } else {
    res.send({ msg: "tag Name Required !" });
  }
});

tagRouter.put("/updatetag", async (req, res) => {
  if (req.body.category_name == "") {
    res.send({ msg: "tag Name Required !" });
  } else if (req.body.id == "") {
    res.send({ msg: "tag Id Required !" });
  } else {
    const result = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      { where: { id: req.body.id } }
    );
    res.send({ msg: "Successfully Updated !" });
  }
});

tagRouter.delete("/deletetag", async (req, res) => {
  if (req.body.id == "") {
    res.send({ msg: "tag Id Required !" });
  } else {
    const result = await Tag.destroy({ where: { id: req.body.id } });
    res.send({ msg: "Successfully Deleted !" });
  }
});

module.exports = tagRouter;
