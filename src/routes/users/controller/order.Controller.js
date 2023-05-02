const { or } = require("sequelize");
const orderModel = require("../models/order.Model");

const createOrder = async function (req, res) {
  try {
    const { product_id, status } = req.body;
    const newOrder = await orderModel.create({
      product_id,
      status,
    });
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getOrder = async function (req, res) {
  try {
    const order = await orderModel.findAll({
      attributes: ["id", "product_id", "status"],
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateOrder = async function (req, res) {
  try {
    const { id } = req.params;
    const order = await orderModel.findOne({
      attributes: ["id", "product_id", "status"],
      where: { id },
    });
    task.set(req.body);
    await set.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteOrder = async function (req, res) {
  try {
    const { id } = req.params;
    await orderModel.destroy({
      where: { id },
    });
    res.status(204).json({ message: "order deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getOrderById = async function (res, res) {
  try {
    const { id } = req.params;
    const order = await orderModel.findOne({
      where: { id },
      attributes: ["id", "product_id", "status"],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
};
