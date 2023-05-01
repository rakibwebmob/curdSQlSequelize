const Router  =require( "express");
const  router=Router();

const {createProject,getProject,updateProject,deleteProject} = "../controllers/project.controller.js"

router.post("/create",function(req,res){createProject});
router.get("/get",function(req,res){getProject});
router.put("/update/:id",function(req,res){updateProject});
router.delete("/delete/:id",function(req,res){deleteProject});

module.exports = router;