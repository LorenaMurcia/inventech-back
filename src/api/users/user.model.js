const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const User = conexion.define('User', {
  id_usuario : {type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true},
  nombres: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false, unique: false },
  contraseña: { type: DataTypes.STRING, allowNull: false },
  id_rol: { type: DataTypes.INTEGER, allowNull: false }, // técnico, Admin, Cliente,
  fecha_creacion : {type: DataTypes.DATE, allowNull: false}
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = User;
