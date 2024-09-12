const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Tipo_dispositivo = conexion.define('Tipo_dispositivo', {
    id_tipo: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: { type: DataTypes.STRING, allowNull: false },    
}, {
    tableName: 'tipo_dispositivo',
    timestamps: false,
});

module.exports = Tipo_dispositivo;