const { where } = "sequelize";
const Project = "./model"

const createProject= async function createProject(req,res){
    const {name,priority,description,deliveryDate}=req.body;
    try {
        let newproject =await Project.create(
            {
                name,
                priority,
                description,
                deliveryDate:new Date(deliveryDate).getTime()
            },
            {
                field:["name","priority","description","deliverydate"],
            }
        );
        return res.json(newproject);
    } catch (err) {
        res.status(500).json({
            msg:err.message
        })
    }
    res.json("received")
}


const getProject= async function getProject(req,res){
    try{
        const projects =await Project.findAll({
            attributes:["id","name","priority","description"]
        });
        res.json(projects)
    
    }
    catch(erro){
        res.status(500).json({
            msg:erro.message
        });
}
};
 const updateProject=async function (req,res){
    try {
        const {id}=req.param;
      const project=await Project.update(req.body,
      {where:{id:1}}
      )
      res.json(project)
}catch (error) {
        console.log(error);
        return res.status(500).json({msg:error.message})
    }
};
 const deleteProject=async function(req,res){
    try {
        const {id}=req.param;
        await Project.destroy({
            where:{
                id:1
            }
        })
        res.json("deleted seccessfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error.message})
    }
}

module.exports={createProject,getProject,updateProject,deleteProject}