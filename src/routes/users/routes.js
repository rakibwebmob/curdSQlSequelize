const { Router } = require("express");
const router = Router();
const { getProject } = require("./controller");

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

module.exports = router;
