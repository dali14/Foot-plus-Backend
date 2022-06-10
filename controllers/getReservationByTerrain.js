const Reservation=require('../models/Reservation')

exports.get=(req,res,next)=>{
    Reservation.find({id_Terrain: req.params.id_Terrain})
 .then(reservation=>res.status(200).json(reservation))
 .catch(err=>res.status(400).json({error:err.message}));   
};