const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');
const Marca = require('../marcas/marca.model');
const Tipo_dispositivo = require('../tipo_dispositivo/tipo_dispositivo.model');
const User = require('../users/user.model');

const Equipos = conexion.define('Equipos', {
    id_equipo: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha_registro: { type: DataTypes.DATE, allowNull: false },
    id_marca: { type: DataTypes.INTEGER, allowNull: false, 
        references:{
            model:Marca, key:'id_marca'
        }
    },    
    serial: { type: DataTypes.STRING, allowNull: false, unique:true}, 
    id_tipo: { type: DataTypes.INTEGER, allowNull: false,
        references:{
            model:Tipo_dispositivo, key:'id_tipo'
        } 
    },
    memoria_ram: { type: DataTypes.INTEGER, allowNull: false },
    disco_duro: { type: DataTypes.INTEGER, allowNull: false },
    procesador: { type: DataTypes.INTEGER, allowNull: false },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false, 
        references:{
            model:User, key:'id_usuario'
        }
    },
}, {
    tableName: 'equipos',
    timestamps: false,
});

Equipos.belongsTo(Marca,{ 
    foreignKey:'id_marca', 
    as: 'marca'
})

Equipos.belongsTo(Tipo_dispositivo,{ 
    foreignKey:'id_tipo', 
    as: 'TipoDispositivo'
})

Equipos.belongsTo(User,{ 
    foreignKey:'id_usuario', 
    as: 'UsuarioResponsable'
})

module.exports = Equipos;