const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Category = sequelize.define("categories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Category;
