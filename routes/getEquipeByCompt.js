const express = require('express');
const router = express.Router();

const getEquipeByCompt=require('../controllers/getEquipeByCompt')
router.get('/:id_compt',getEquipeByCompt.get);
module.exports=router;