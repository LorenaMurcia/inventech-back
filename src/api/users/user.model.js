const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const User = conexion.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false }, // técnico, Admin, Cliente
  status: { type: DataTypes.STRING, allowNull: false }, // activo, inactivo
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;

