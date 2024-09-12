const express = require('express');
const router = express.Router();
const {createEquipo,getAll,getEquipo,updateEquipo,deleteEquipo} = require('./equipos.controller')

router.get('/', getAll);
router.get('/:id', getEquipo);
router.post('/', createEquipo);
router.put('/:id', updateEquipo);
router.delete('/:id', deleteEquipo);

module.exports = router;