const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');
const Equipos = require('../equipos/equipos.model');

const Mantenimientos = conexion.define('Mantenimientos', {
  id_mantenimiento: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  serial: {
    type: DataTypes.STRING, allowNull: false, unique: false,
    references: {
      model: Equipos,
      key: 'serial'
    }
  },
  diagnostico_inicial: { type: DataTypes.STRING, allowNull: false },
  fecha_recepcion: { type: DataTypes.DATE, allowNull: false }, //¿Timestamps?
}, {
  tableName: 'mantenimientos',
  timestamps: false
});

Mantenimientos.belongsTo(Equipos, {
  foreignKey: 'serial',
  as: 'equipo'
});

module.exports = Mantenimientos;
