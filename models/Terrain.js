const mongoose=require('mongoose');
const terrainSchema = mongoose.Schema({

    nameTerrain : {type:String, required:"true"},
    lat : {type:String, required:"true"},
    lng : {type:String, required:"true"},
    coordinates:[{type:Number,type:Number}],
    price : {type:String, required:"true"},
    area:{type:String,required:"true"},
    image:[{type:String}],
    type:{type:String,required:"true"},
    capaciteJoueur : {type:String, required:"true" },
    images : {type:String},
    id_user: {type:String, required:"true"},
    valide:{type:String,required:"true"},
    address:{type:String,required:"true"}, 
    ville : {type:String, required:"true"},
    email :{type:String, required:"true"},
    tel :{type:String, required:"true"},
    description :{type:String, required:"true"},
    }, { timestamps: true },
    
    )
const Terrain = mongoose.model('Terrain', terrainSchema);
module.exports = Terrain;

 