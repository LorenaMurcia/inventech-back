const Rol = require ('./rol.model')

const getAllRoles = async(req,res) => {
    try {
        const rol = await Rol.findAll();
        res.status(200).json(rol);
    } catch (error) {
        res.status(500).json({message: 'Error al listar los roles' + error});
    }
}

const getOneRol = async (req,res) => {
    try {
        const id = req.params.id;
        const rol = await Rol.findByPk(id);
        if(!rol){
            res.status(404).json({message: 'No existe el rol'})
        }
        res.status(200).json(rol);
    } catch (error) {
        res.status(500).json({message: 'Error al traer el listado de roles' + error})
    }
}

module.exports = {getAllRoles,getOneRol}