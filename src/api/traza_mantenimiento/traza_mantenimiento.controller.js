const Traza = require('./traza_mantenimiento.model');
const Estado_equipos = require('../estado_equipos/estado_equipos.model');
const Equipos = require('../equipos/equipos.model');
const Mantenimientos = require('../mantenimientos/mantenimientos.model');

const createTraza = async (req, res) => {
    try {
        const { fecha, descripcion, id_estado, serial, id_mantenimiento } = req.body;
        if (!fecha || !descripcion || !id_estado || !serial || !id_mantenimiento) {
            return res.status(400).json({ message: 'Todos los datos son necesarios' });
        }

        const mantenimientos = await Mantenimientos.findOne({
            where: {
                id_mantenimiento: id_mantenimiento
            }
        });

        if (!mantenimientos) {
            return res.status(401).json({ message: 'El id del mantenimiento no existe' });
        }

        const equipos = await Equipos.findOne({
            where: {
                serial: serial
            }
        });

        if (!equipos) {
            return res.status(401).json({ message: 'El serial del equipo no existe' });
        }

        const traza = await Traza.create(req.body);
        res.status(200).json(traza);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la traza: ' + error });
    }
};

const getAllTraza = async (req, res) => {
    try {
        const traza = await Traza.findAll({
            attributes: ['id_traza', 'fecha', 'descripcion', 'serial', 'id_mantenimiento'],
            include: [{
                model: Estado_equipos,
                attributes: ['descripcion'],
                as: 'estado'
            }]
        });
        res.status(200).json(traza);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar la traza', error });
    }
}

const getOneTraza = async (req, res) => {
    try {
        const id = req.params.id;
        const traza = await Traza.findByPk(id);
        if (!traza) {
            return res.status(404).json({ message: 'Traza no encontrada' })
        }
        res.status(200).json(traza);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer la lista de traza' + error })
    }
}

const updateTraza = async (req, res) => {
    try {
        const id = req.params.id;
        const traza = await Traza.findByPk(id);
        if (!traza) {
            return res.status(404).json({ message: 'Traza no encontrada' })
        }
        await traza.update(req.body);
        res.status(200).json({ message: 'Traza actualizada' })
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la traza' + error })
    }
}

module.exports = { createTraza, getAllTraza, getOneTraza, updateTraza }
