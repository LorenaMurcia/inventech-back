const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const conexion = require('../../config/db');

const User = conexion.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: false }, // Asegúrate de que email sea único si lo deseas
  password: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;

