const Marca = require('./marca.model')

const getAll = async (req, res)=>{
  try {
    const marca = await Marca.findAll();
    res.status(200).json(marca);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar marca' });
  }

}

const createMarca = async (req, res)=>{
  try {
    const { marca_fabricante} = req.body
    if(! marca_fabricante){
      res.status(400).json({ message: 'Falta agregar el dato marca' })
    }
    const marca = await Marca.create({ marca_fabricante });
    res.status(200).json(marca);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear', error: error.message })
  }
}

const getOne = async (req, res) =>{
  try {
    const id = req.params.id;
    const marca = await Marca.findByPk(id);
    if(!marca){
      res.status(404).json({ message: 'No existe la marca' });
    }
    res.status(200).json(marca);
  } catch (error) {
    res.status(500).json({ message: 'Error al traer la marca', error: error.message })
  }
}

const updateMarca = async (req, res)=>{
  try {
    const id = req.params.id;
    const marca = await Marca.findByPk(id);
    if(!marca){
      res.status(404).json({ message: 'No existe la marca' });
    }
    const { marca_fabricante } = req.body;
    if(marca_fabricante) marca.marca_fabricante = marca_fabricante;
    await marca.save();
    res.status(200).json(marca)
  } catch (error) {
    res.status(500).json({ message: 'Error al editar marca' });
  }
}

const deleteMarca = async (req, res)=>{
  try {
    const id = req.params.id;
    const marca = await Marca.findByPk(id);
    if(!marca){
      return res.status(404).json({message: 'No existe la marca'})
    }
    await marca.destroy();
    res.status(200).json({ message: 'Marca eliminada', marca });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar marca' });
  }
}

module.exports = { getAll, createMarca, getOne, updateMarca, deleteMarca };
