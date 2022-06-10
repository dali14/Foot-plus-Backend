const mongoose=require('mongoose');
const EquipeSchema = mongoose.Schema({

    nom : {type:String, required:"true"},
    tel : {type:String, required:"true"},
    nbPlayer : {type:Number, required:"true"},
    ville : {type:String, required:"true" },
    id_compt : {type:String, required:"true"},
    id_user: {type:String},
    }, { timestamps: true },
    
    )
const Equipe = mongoose.model('Equipe', EquipeSchema);
module.exports = Equipe;