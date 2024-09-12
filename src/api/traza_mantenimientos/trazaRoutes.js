const express = require('express');
const router = express.Router();
const {getAll} = require('./traza_mantenimiento.controller')

router.get('/', getAll);
router.get('/:id', );
router.post('/', );
router.put('/:id', );
router.delete('/:id', );

module.exports = router;