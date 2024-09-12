const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Rol = conexion.define('Rol', {
    id_rol: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },

}, {
    tableName: 'roles',
    timestamps: false,
});

module.exports = Rol;
