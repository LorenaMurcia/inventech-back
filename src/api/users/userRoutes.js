const express = require('express');
const router = express.Router();
const {registrar, listar}  = require('./user.controller');

router.get('/', listar);
router.get('/:id');
router.post('/', registrar);
router.delete('/:id');

module.exports = router;
