const Estado_equipos = require('../estado_equipos/estado_equipos.model')

const getAllEstados = async (req,res) => {
    try {
        const estado_equipos = await Estado_equipos.findAll();
        res.status(200).json(estado_equipos);
    } catch (error) {
        res.status(500).json({message: 'Error al listar los estados de los equipos'});
    }
}

const getOneEstado = async (req,res) => {
    try {
        const id = req.params.id;
        const estado_equipo = await Estado_equipos.findByPk(id);
        if(!estado_equipo){
            res.status(404).json({message: 'No existe el estado del equipo'});
        }
        res.status(200).json(estado_equipo);
    } catch (error) {
        res.status(500).json({message: 'Error al listar el estado del equipo' + error})
    }
}

module.exports = {getAllEstados,getOneEstado};