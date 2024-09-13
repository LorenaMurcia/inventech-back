const Tipo_dispositivo = require('./tipo_dispositivo.model')

const getAllTipoDispositivo = async (req, res) => {
  try {
    const tipo_dispositivo = await Tipo_dispositivo.findAll()
    res.status(200).json(tipo_dispositivo)
  }
  catch (error) {
    res.status(500).json({ error: 'Error al obtener los tipos de mantenimiento', error });
  }
}

const getTipoDispositivo = async (req, res) => {
  try {
    const { id } = req.params
    const tipo_dispositivo = await Tipo_dispositivo.findByPk(id)
    if (tipo_dispositivo) {
      res.status(200).json(tipo_dispositivo)
    } else {
      res.status(404).json({ error: 'Tipo de mantenimiento no encontrado' })
    }
  }
  catch (error) {
    res.status(500).json({ error: 'Error al obtener el tipo de mantenimiento', error });
  }
}

const createTipoDispositivo = async (req, res) => {
  try {
    const tipo_dispositivo = await Tipo_dispositivo.create(req.body)
    res.status(201).json(tipo_dispositivo)
  }
  catch (error) {
    res.status(500).json({ error: 'Error al crear el tipo de mantenimiento', error });
  }
}

const updateTipoDispositivo = async (req, res) => {
  try {
    const { id } = req.params
    const tipo_dispositivo = await Tipo_dispositivo.findByPk(id)
    if (tipo_dispositivo) {
      await tipo_dispositivo.update(req.body)
      res.status(200).json(tipo_dispositivo)
    } else {
      res.status(404).json({ error: 'Tipo de mantenimiento no encontrado' })
    }
  }
  catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tipo de mantenimiento', error });
  }
}

const deleteTipoDispositivo = async (req, res) => {
  try {
    const { id } = req.params
    const tipo_dispositivo = await Tipo_dispositivo.findByPk(id)
    if (tipo_dispositivo) {
      await tipo_dispositivo.destroy()
      res.status(200).json({ message: 'Tipo de mantenimiento eliminado correctamente' })
    } else {
      res.status(404).json({ error: 'Tipo de mantenimiento no encontrado' })
    }
  }
  catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tipo de mantenimiento', error });
  }
}

module.exports = {
  getAllTipoDispositivo,
  getTipoDispositivo,
  createTipoDispositivo,
  updateTipoDispositivo,
  deleteTipoDispositivo
}