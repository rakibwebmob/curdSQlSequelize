const userModel = require("../models/product.Model");

const createUser = async function (req, res) {
  try {
    const { id, name, mobiel, email } = req.body;
    const user = await userModel.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async function (req, res) {
  try {
    const userData = await userModel.findAll({
      attributes: ["id", "name", "mobile", "email"],
      product: ["id", "desc"],
      order: ["id", "status"],
    });
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async function (req, res) {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({
      attributes: ["id", "name", "mobile", "email"],
      where: { id },
    });
    user.set(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async function (req, res) {
  const { id } = req.params;
  try {
    const user = await userModel.destroy({
      where: { id },
    });
    res.json("user deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
