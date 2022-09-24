require("dotenv").config();
const sequelize = require("./db/connection");
const Category = require("./model/Category");
const Product = require("./model/Product");
const ProductTag = require("./model/ProductTag");
const Tag = require("./model/Tag");
sequelize
  .sync({ force: true })
  .then((response) => {
    console.log("successfully databases migrated !");
  })
  .catch((err) => console.log(err));
