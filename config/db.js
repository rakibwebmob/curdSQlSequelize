const Sequelize =require( "sequelize");

 const sequelize=new Sequelize(
    "ecommerce",
    "postgres",
    "123456",
{
    host:"localhost",
    dialect:"postgres"
}
)
module.exports=sequelize