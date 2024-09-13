const TipoDispositivo = require('./tipo_dispositivo.model')

const handleResponse = (res, status, data) => res.status(status).json(data);

const getAllTipoDispositivo = async (req, res) => {
  try {
    const tipoDispositivo = await TipoDispositivo.findAll()
    handleResponse(res, 200, tipoDispositivo)
  } catch (error) {
    handleResponse(res, 500, { error: 'Error al obtener los tipos de mantenimiento', details: error });
  }
}

const getTipoDispositivo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoDispositivo = await TipoDispositivo.findByPk(id)
    if (tipoDispositivo) {
      handleResponse(res, 200, tipoDispositivo)
    } else {
      handleResponse(res, 404, { error: 'Tipo de mantenimiento no encontrado' })
    }
  } catch (error) {
    handleResponse(res, 500, { error: 'Error al obtener el tipo de mantenimiento', details: error });
  }
}

const createTipoDispositivo = async (req, res) => {
  try {
    const tipoDispositivo = await TipoDispositivo.create(req.body)
    handleResponse(res, 201, tipoDispositivo)
  } catch (error) {
    handleResponse(res, 500, { error: 'Error al crear el tipo de mantenimiento', details: error });
  }
}

const updateTipoDispositivo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoDispositivo = await TipoDispositivo.findByPk(id)
    if (tipoDispositivo) {
      await tipoDispositivo.update(req.body)
      handleResponse(res, 200, tipoDispositivo)
    } else {
      handleResponse(res, 404, { error: 'Tipo de mantenimiento no encontrado' })
    }
  } catch (error) {
    handleResponse(res, 500, { error: 'Error al actualizar el tipo de mantenimiento', details: error });
  }
}

const deleteTipoDispositivo = async (req, res) => {
  try {
    const { id } = req.params
    const tipoDispositivo = await TipoDispositivo.findByPk(id)
    if (tipoDispositivo) {
      await tipoDispositivo.destroy()
      handleResponse(res, 200, { message: 'Tipo de mantenimiento eliminado correctamente' })
    } else {
      handleResponse(res, 404, { error: 'Tipo de mantenimiento no encontrado' })
    }
  } catch (error) {
    handleResponse(res, 500, { error: 'Error al eliminar el tipo de mantenimiento', details: error })
  }
}

module.exports = {
  getAllTipoDispositivo,
  getTipoDispositivo,
  createTipoDispositivo,
  updateTipoDispositivo,
  deleteTipoDispositivo
}
