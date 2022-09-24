const Sequelize = require("sequelize");
const sequelize = require("../db/connection");
const Product = require("../model/Product");
const Tag = require("../model/Tag");
const ProductTag = sequelize.define("producttags", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product_id: {
    type: Sequelize.INTEGER,
    references: {
      model: "products",
      key: "id",
    },
  },
  tag_id: {
    type: Sequelize.INTEGER,
    references: {
      model: "tags",
      key: "id",
    },
  },
});
ProductTag.belongsTo(Product, { foreignKey: "product_id" });
ProductTag.belongsTo(Tag, { foreignKey: "tag_id" });
module.exports = ProductTag;
