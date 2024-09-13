const express = require('express');
const router = express.Router();
const { getAllMantenimientos, createMantenimientos, deleteMantenimientos, getMantenimiento, updateMantenimiento } = require('./mantenimientos.controller');

router.get('/', getAllMantenimientos)
router.get('/:id', getMantenimiento)
router.post('/', createMantenimientos)
router.put('/:id', updateMantenimiento)
router.delete('/:id', deleteMantenimientos)

module.exports = router;