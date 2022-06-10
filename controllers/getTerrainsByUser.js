const Terrain=require('../models/Terrain')

exports.get=(req,res,next)=>{
    Terrain.find({id_user: req.params.id_user})
 .then(terrain=> { if( terrain == "" ){
     return res
    .status(403)
    .json({error:err.message})
 }else{
     return res 
        .status(401)
        .json(terrain[0])
 }


 }
)
 .catch(err=>res.status(400).json({error:true , message :"No Terrain "}));
     
};