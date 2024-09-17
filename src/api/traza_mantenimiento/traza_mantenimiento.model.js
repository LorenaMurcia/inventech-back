const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');
const Estado_equipos = require('../estado_equipos/estado_equipos.model');
const Equipos = require('../equipos/equipos.model');
const Mantenimientos = require('../mantenimientos/mantenimientos.model');

const Traza_mantenimiento = conexion.define('Traza_mantenimiento', {

    id_traza: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha: { type: DataTypes.DATE, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    id_estado: {
        type: DataTypes.INTEGER, allowNull: false,
        references: {
            model: Estado_equipos, key: 'id_estado'
        }
    },
    serial: {
        type: DataTypes.STRING, allowNull: false,
        references: {
            model: Equipos, key: 'serial'
        }
    },
    id_mantenimiento: {
        type: DataTypes.INTEGER, allowNull: false,
        references: {
            model: Mantenimientos, key: 'id_mantenimiento'
        }
    }
}, {
    tableName: 'traza_mantenimiento',
    timestamps: false,
});

Traza_mantenimiento.belongsTo(Estado_equipos, {
    foreignKey: 'id_estado',
    as: 'estado'
})

Traza_mantenimiento.belongsTo(Equipos, {
    foreignKey: 'serial',
    as: 'serialEquipo'
})

Traza_mantenimiento.belongsTo(Mantenimientos, {
    foreignKey: 'id_mantenimiento',
    as: 'IdMantenimiento'
})

module.exports = Traza_mantenimiento;