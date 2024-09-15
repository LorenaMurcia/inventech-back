const { json } = require('sequelize');
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
      const equipo = await Equipos.create(req.body);
      res.status(200).json(equipo);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear', error })
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

const getEquipo = async (req,res) => {
    try {
        const id = req.params.id;
        const equipo = await Equipos.findByPk(id);
        if(!equipo){
            res.status(404).json({message:'No existe el equipo'});
        }
        res.status(200).json(equipo);
    } catch (error) {
        res.status(500).json({message:'Error al intentar traer el equipo'+ error})
    }
}

const updateEquipo = async (req,res) => {
    try {
        const id = req.params.id;
        const equipo = await Equipos.findByPk(id);
        if(!equipo){
            res.status(404).json({message:'No se puede actualizar el equipo'});
        }
        const {memoria_ram,disco_duro} = req.body;
        if(memoria_ram) equipo.memoria_ram = memoria_ram;
        if(disco_duro) equipo.disco_duro = disco_duro;
        await equipo.save();
        res.status(200).json(equipo)
    } catch (error) {
        res.status(500).json({message:'Error al editar el equipo' + error});
    }
}

const deleteEquipo = async (req,res) => {
    try {
        const id = req.params.id;
        const equipo = await Equipos.findByPk(id);
        if(!equipo){
            return res.status(404).json({message:'No existe el equipo'});
        }
        await equipo.destroy();
        res.status(200).json({message:'Equipo eliminado', equipo});
    } catch (error) {
        res.status(500).json({message: 'Error al eliminar el equipo' + error});
    }
}

module.exports = {getAll, createEquipo,getEquipo,updateEquipo,deleteEquipo}
