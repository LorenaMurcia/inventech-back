const Traza = require('./traza_mantenimientos.model');

const getAll = async (req, res) => {
    try {
        const traza = await Traza.findAll();
        res.status(200).json(traza);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar la traza', error});
    }

} 

module.exports = {getAll}