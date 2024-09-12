const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Estado_equipos = conexion.define('Estado_equipos', {
    id_estado: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: { type: DataTypes.STRING, allowNull: false },    
}, {
    tableName: 'estado_equipos',
    timestamps: false,
});

module.exports = Estado_equipos;