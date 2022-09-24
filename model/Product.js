const Sequelize = require("sequelize");
const sequelize = require("../db/connection");
const Category = require("../model/Category");
const Product = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stock: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    references: {
      model: "categories",
      key: "id",
    },
  },
});
Product.belongsTo(Category, { foreignKey: "category_id" });
module.exports = Product;
