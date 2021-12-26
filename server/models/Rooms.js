const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Rooms = sequelize.define(
  "roomlist",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
    },
    totalrooms: {
      type: DataTypes.INTEGER,
    },
    availrooms: {
      type: DataTypes.INTEGER,
    },
    imgpath: {
      type: DataTypes.TEXT,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Rooms", // We need to choose the model name
    freezeTableName: true,
    // createdAt: false,
    // updatedAt: false
  }
);

module.exports = Rooms;
