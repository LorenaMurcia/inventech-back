const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Mantenimientos = conexion.define('Mantenimientos', {
  id_mantenimiento: {type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true},
  serial: { type: DataTypes.STRING, allowNull: false, unique: false },
  diagnostico_inicial:{type: DataTypes.STRING, allowNull: false}, 
  fecha_recepcion: {type: DataTypes.timestamps, allowNull: false},//¿Timestamps? 
}, {
  tableName: 'mantenimientos',
  timestamps: false
});

module.exports = Mantenimientos;
