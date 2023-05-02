const { Router } = require("express");
const router = Router();
const {
  getProject,
  createProject,
  deleteProject,
  updateProject,
} = require("../controller/product.Controller");
const {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
} = require("../controller/order.Controller");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/user.Controller");

router.post("/create", function (req, res) {
  createProject;
});
router.get("/get", getProject);
router.put("/update/:id", function (req, res) {
  updateProject;
});
router.delete("/delete/:id", function (req, res) {
  deleteProject;
});

router.post("/createuser", createUser);
router.get("/getUser", getUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

router.post("/createOrder", createOrder);
router.delete("/deleteOrder", deleteOrder);
router.put("/updateOrder", updateOrder);
router.get("/getOrder", getOrder);
router.get("/getOrderById", getOrderById);

module.exports = router;
