const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db");

 const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.INTEGER,
    },
    mobile: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
module.exports=User