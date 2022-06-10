const Equipe=require('../models/Equipe')

exports.get=(req,res,next)=>{
    Equipe.find({id_compt: req.params.id_compt})
 .then(equipe=>res.status(200).json(equipe))
 .catch(err=>res.status(400).json({error:err.message}));   
};