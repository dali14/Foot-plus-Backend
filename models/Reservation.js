const mongoose=require('mongoose');
const ReservationSchema = mongoose.Schema({

    id_Terrain : {type:String, required:"true"},
    name : {type:String, required:"true"},
    dateD : {type:String, required:"true"},
    dateF : {type:String, required:"true"},
    duree : {type:String, required:"true" },
    etat : {type:String, required:"true"},
    id_user : {type:String},
    prix: {type:Number, required:"true"},
    prixPayant:{type:String, required:"true"}
    }, { timestamps: true },
    
    )
const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;

 