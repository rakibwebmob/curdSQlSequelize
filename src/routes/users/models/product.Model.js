const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db");
// const user =require ("./user.Model")
   const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
  );
  Product.associate = function(models) {
  Product.belogsTo(models.User,{
    foreignKey:"product_id",
    sourceKey:"id"

  })
  return Product;
// User.belogsTo(Product,{foreignKey:"product_id",targetId:"id"});
}
// return Product
module.exports ={Product}
