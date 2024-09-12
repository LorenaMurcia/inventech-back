const express = require('express');
const router = express.Router();
const {getAllEstados,getOneEstado} = require ('./estado_equipos.controller');

router.get('/', getAllEstados);
router.get('/:id', getOneEstado);
router.post('/', );
router.put('/:id', );
router.delete('/:id', );

module.exports = router;
