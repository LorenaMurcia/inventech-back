const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Maintance = conexion.define('Maintance', {
  id_mantenimiento: { type: DataTypes.STRING, allowNull: false },
  id_equipo: { type: DataTypes.STRING, allowNull: false, unique: false },
  status:{type: DataTypes.STRING, allowNull: false}, // recibido, en curso, finalizado
  recibido: {type: DataTypes.STRING, allowNull: false},
  en_curso: {type: DataTypes.STRING, allowNull: false},
  finalizado: {type: DataTypes.STRING, allowNull: false}
}, {
  tableName: 'maintance',
  timestamps: false
});

module.exports = Maintance;
