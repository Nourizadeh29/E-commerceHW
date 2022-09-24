const Sequelize = require("sequelize");
const sequelize = require("../db/connection");
const Tag = sequelize.define("tags", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tag_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Tag;
