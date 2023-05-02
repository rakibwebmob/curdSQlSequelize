const { where } = require("sequelize");
const Project = require("../models/product.Model");

exports.createProject = async function createProject(req, res) {
  const { id,name, type, description } = req.body;
  console.log(req.body);
  try {
    let newproject = await Project.create(
      {id,
        name,
        type,
        description,
      },
      {
        field: ["id","name", "type", "description"],
      }
    );
    return res.json(newproject);
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
  res.json("received");
};

exports.getProject = async (req, res) => {
  try {
    console.log(req.body);
    const projects = await Project.findAll({
      attributes: ["id", "name", "type", "description"],
    });
    res.json(projects);
  } catch (erro) {
    res.status(500).json({
      msg: erro.message,
    });
  }
};
exports.updateProject = async function (req, res) {
  try {
    const { id } = req.param;
    const project = await Project.update(req.body, { where: { id: 1 } });
    res.json(project);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
exports.deleteProject = async function (req, res) {
  try {
    const { id } = req.param;
    await Project.destroy({
      where: {
        id: 1,
      },
    });
    res.json("deleted seccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};
