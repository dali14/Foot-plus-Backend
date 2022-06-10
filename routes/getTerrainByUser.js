const express = require('express');
const router = express.Router();

const tervController=require('../controllers/getTerrainsByUser')
router.get('/:id_user',tervController.get);
module.exports=router;
