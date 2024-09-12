const express = require('express');
const router = express.Router();
const {getAllRoles,getOneRol} = require('./rol.controller')

router.get('/', getAllRoles);
router.get('/:id', getOneRol);
router.post('/', );
router.put('/:id', );
router.delete('/:id', );

module.exports = router;