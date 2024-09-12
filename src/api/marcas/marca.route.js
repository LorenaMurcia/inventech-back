const express = require('express');
const router = express.Router();
const { getAll, createMarca, getOne, updateMarca, deleteMarca } = require('./marca.controller')

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createMarca);
router.put('/:id', updateMarca);
router.delete('/:id', deleteMarca);

module.exports = router;
