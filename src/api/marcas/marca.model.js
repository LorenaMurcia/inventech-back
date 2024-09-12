const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Marca = conexion.define('Marca', {
  id_marca : {type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true},
  marca_fabricante: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'marca',
  timestamps: false,
});

module.exports = Marca;
