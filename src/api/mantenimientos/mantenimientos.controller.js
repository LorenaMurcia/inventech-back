const Mantenimientos = require('./mantenimientos.model');

const getAllMantenimientos = async (req, res) => {
  try {
    const mantenimientos = await Mantenimientos.findAll()
    res.status(200).json(mantenimientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mantenimientos', error });
  }
}

const getMantenimiento = async (req, res) => {
  try {
    const { id } = req.params;
    const mantenimientos = await Mantenimientos.findByPk(id);
    if (!mantenimientos) {
      return res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
    res.status(200).json(mantenimientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el mantenimiento', error });
  }
}

const createMantenimientos = async (req, res) => {
  try {
    const { id_mantenimiento, serial, diagnostico_inicial, fecha_recepcion} = req.body;
    if(!id_mantenimiento, !serial, !diagnostico_inicial, !fecha_recepcion){
      res.status(401).json({message: 'se requieren todos los datos'})
    }
    const mantenimientos = await Mantenimientos.create(req.body);
    res.status(201).json(mantenimientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el mantenimiento', error });
  }
}

const updateMantenimiento = async (req, res) => {
  try {
    const { id } = req.params;
    const mantenimiento = await Mantenimientos.findByPk(id);
    if (!mantenimiento) {
      return res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
    const { diagnostico_inicial } = req.body;
    if (diagnostico_inicial) mantenimiento.diagnostico_inicial = diagnostico_inicial
    await mantenimiento.save();
    res.status(200).json({ message: 'Mantenimiento actualizado correctamente', mantenimiento });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el mantenimiento', error });
  }
}

const deleteMantenimientos = async (req, res) => {
  try {
    const { id } = req.params;
    const mantenimientos = await Mantenimientos.findByPk(id);
    if (!mantenimientos) {
      return res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
    await mantenimientos.destroy();
    res.status(200).json({ message: 'Mantenimiento eliminado correctamente', mantenimientos });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el mantenimiento', error });
  }
}

module.exports = {
  getAllMantenimientos, createMantenimientos, deleteMantenimientos, getMantenimiento, updateMantenimiento
}
