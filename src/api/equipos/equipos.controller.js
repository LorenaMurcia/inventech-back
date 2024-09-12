const Marca = require('../marcas/marca.model');
const Tipo_dispositivo = require('../tipo_dispositivo/tipo_dispositivo.model');
const User = require('../users/user.model');
const Equipos = require('./equipos.model');

const createEquipo = async (req, res)=>{
    try {
      const {fecha_registro,id_marca,serial,id_tipo,memoria_ram,disco_duro,procesador,id_usuario} = req.body
      if(!fecha_registro || !id_marca || !serial || !id_tipo || !memoria_ram || !disco_duro || !procesador || !id_usuario){
        res.status(400).json({ message: 'Todos los campos son obligatorios'})
      }
      const equipo = await Equipos.create({ fecha_registro,id_marca,serial,id_tipo,memoria_ram,disco_duro,procesador,id_usuario });
      res.status(200).json(equipo);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear', error: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const equipos = await Equipos.findAll(
            {
                include:[{
                    model:Marca,
                    attributes:['marca_fabricante'],
                    as:'marca'
                },{
                    model:Tipo_dispositivo,
                    attributes:['descripcion'],
                    as:'TipoDispositivo'
                },{
                    model:User,
                    attributes:['nombres'],
                    as:'UsuarioResponsable'
                }]
            }
        );
        res.status(200).json(equipos);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar los equipos' + error});
    }

} 



module.exports = {getAll, createEquipo}