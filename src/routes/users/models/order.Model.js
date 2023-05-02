
const { DataTypes, BOOLEAN } = require("sequelize");
const sequelize = require("../../../config/db");
require ("./user.Model")

 const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestapms: false,
    created_at: true,
  }
);
// product.hasMany("User",{
//     foreignKey:"order_id",
//     sourceKey:"id"
//   })
// User.belogsTo(Order,{foreignKey:"order_id",targetId:"id"});

Order.associate = function(models) {
  Product.belogsTo(models.User,{
    foreignKey:"order_id",
    sourceKey:"id"

  })
  return Product;
}
module.export ={Order}