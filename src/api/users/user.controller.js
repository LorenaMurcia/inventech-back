const bcrypt = require('bcrypt')
const User =  require('../users/user.model');
const Rol = require('../rol/rol.model');

const createUser = async (req, res) =>{
  try {
    const {nombres, correo, contraseña, id_rol, fecha_creacion} = req.body;
    //validaciones campos vacios
    if (!nombres || !correo || !contraseña) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    //encryptar la contraseña
    const hashedcontraeña = await bcrypt.hash(contraseña, 10);
    //crear el usuario
    const user = await  User.create({nombres, correo, contraseña: hashedcontraeña, id_rol, fecha_creacion});
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear', error: error.message });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes:['id_usuario','correo','nombres','fecha_creacion', 'contraseña'],
      include:{
        model:Rol,
        as:'rol',
        attributes:['nombre']
      }
    });
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
     res.status(500).json({ message: 'Error al listar usuarios' + error}); 
  }
}

const getUser = async (req, res)=>{
  try{
    const id = req.params.id;
    const user = await User.findByPk(id);
    if(!user){
      return res.status(404).json({message: 'Usuario no encontrado'})
      }
      res.status(200).json(user);
  } catch(err){
    res.status(500).json({ message: 'Error al listar usuario' + err});
  }
}

const updateUser = async (req, res)=>{
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if(!user){
      return res.status(404).json({message: 'Usuario no encontrado'})
      }
      const {nombres, correo, contraseña, id_rol,} = req.body;
      if(nombres) user.nombres = nombres;
      if(correo) user.correo = correo;
      if(id_rol) user.id_rol = id_rol;
      if(contraseña) user.contraseña = await bcrypt.hash(contraseña, 10);
      await user.save();
      res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json({ message: 'Error al editar usuario' });
  }
}

const deleteUser = async (req, res)=>{
 try {
  const id = req.params.id;
  const user = await User.findByPk(id);
  if(!user){
    return res.status(404).json({message: 'Usuario no encontrado'})
  }
  await user.destroy();
  res.status(200).json({ message: 'Usuario eliminado', user });
 } catch (error) {
  res.status(500).json({ message: 'Error al eliminar usuario' });
 }
}


module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
