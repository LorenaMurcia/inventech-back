const express = require('express');
const router = express.Router();
const { getAllTipoDispositivo, getTipoDispositivo, createTipoDispositivo, updateTipoDispositivo, deleteTipoDispositivo } = require('./tipo_dispositivo.controller')

router.get('/', getAllTipoDispositivo);
router.get('/:id', getTipoDispositivo);
router.post('/', createTipoDispositivo);
router.put('/:id', updateTipoDispositivo);
router.delete('/:id', deleteTipoDispositivo);

module.exports = router;
