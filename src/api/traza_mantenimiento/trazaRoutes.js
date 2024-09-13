const express = require('express');
const router = express.Router();
const {createTraza,getAllTraza,getOneTraza} = require('./traza_mantenimiento.controller')

router.get('/', getAllTraza);
router.get('/:id', getOneTraza);
router.post('/', createTraza);
router.put('/:id', );
router.delete('/:id', );

module.exports = router;