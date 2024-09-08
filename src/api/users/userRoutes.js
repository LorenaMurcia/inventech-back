const express = require('express');
const router = express.Router();
const {createUser, getAllUsers, getUser, updateUser}  = require('./user.controller');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', updateUser);

module.exports = router;
