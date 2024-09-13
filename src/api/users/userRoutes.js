const express = require('express');
const router = express.Router();
const {createUser, getAllUsers, getUser, updateUser, deleteUser}  = require('./user.controller');
const { login } = require('./Auth/auth.controller');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/auth/login', login)

module.exports = router;
