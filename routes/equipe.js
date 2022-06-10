const express = require('express');
const router = express.Router();
const equipeController=require('../controllers/equipeController')
router.get('/', equipeController.all); 
router.get('/:id', equipeController.get);
router.post('/', equipeController.create);

    
module.exports=router;