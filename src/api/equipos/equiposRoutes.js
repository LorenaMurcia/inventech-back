const express = require('express');
const router = express.Router();
const {createEquipo,getAll} = require('./equipos.controller')

router.get('/', getAll);
router.get('/:id', );
router.post('/', createEquipo);
router.put('/:id', );
router.delete('/:id', );

module.exports = router;