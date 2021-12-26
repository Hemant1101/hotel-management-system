const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const User = sequelize.define(
  "users",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    bookedrooms: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    checkin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    checkout: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    phonenumber: {
      type: DataTypes.TEXT("tiny"),
    },
    totalbill: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    paidbill: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    unpaidbill: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    freezeTableName: true,
    // createdAt: false,
    // updatedAt: false
  }
);
// User.removeAttribute('id');
// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports = User;
