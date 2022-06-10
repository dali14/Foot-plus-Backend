const express = require('express');
const router = express.Router();

const getReservationByTerrain=require('../controllers/getReservationByTerrain')
router.get('/:id_Terrain',getReservationByTerrain.get);
module.exports=router;