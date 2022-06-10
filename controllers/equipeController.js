
const Equipe=require('../models/Equipe')

exports.all=('/',(req,res)=>{
    Equipe.find()
 .then(equipe=>res.status(200).json(equipe))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


exports.create = (req, res, next) => {
    const equipe = new Equipe({
      ...req.body
    });
    equipe.save()
      .then(() => res.status(201).json(equipe))
      .catch(error => res.status(400).json({ error }));
  };
  
  exports.get=('/:id',(req,res,next)=>{
    Equipe.findOne({_id: req.params.id})
 .then(equipe=>res.status(200).json(equipe))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


//   exports.update=('/:id',(req,res,next)=>{
   
//     Competition.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
//     .then(competition=>res.status(200).json({message:'Competition updated Seccesfuly'}))
//     .catch(err=>res.status(400).json({error:err.message}));
        
//    });
//    exports.delete=('/:id',(req,res,next)=>{
      
//     Competition.deleteOne({_id: req.params.id})
//        .then(competition=>res.status(200).json({message:'Competition deleted Seccesfuly'}))
//        .catch(err=>res.status(400).json({error:err.message}));
           
//       });